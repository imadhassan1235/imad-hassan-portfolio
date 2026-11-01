declare const process: { env: Record<string, string | undefined> };

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const requestsByIp = new Map<string, { startedAt: number; count: number }>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: Record<string, string | boolean>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, request] of requestsByIp) {
    if (now - request.startedAt >= RATE_WINDOW_MS) requestsByIp.delete(key);
  }
  const current = requestsByIp.get(ip);
  if (!current) {
    if (requestsByIp.size >= 10_000) return true;
    requestsByIp.set(ip, { startedAt: now, count: 1 });
    return false;
  }
  if (current.count >= RATE_LIMIT) return true;
  current.count += 1;
  return false;
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== "POST") {
      return json({ error: "Method not allowed." }, 405);
    }

    const origin = request.headers.get("origin");
    const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    if (origin && host) {
      try {
        if (new URL(origin).host !== host) return json({ error: "Request origin is not allowed." }, 403);
      } catch {
        return json({ error: "Invalid request origin." }, 403);
      }
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) return json({ error: "Too many messages. Please try again later." }, 429);

    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "Request body must be valid JSON." }, 400);
    }
    if (!isRecord(payload)) return json({ error: "Invalid contact form data." }, 400);

    const { name, email, subject, message, website } = payload;
    if (typeof website === "string" && website.trim()) {
      return json({ error: "Invalid contact form submission." }, 400);
    }
    if (
      typeof name !== "string" ||
      !name.trim() ||
      name.trim().length > 100 ||
      typeof email !== "string" ||
      email.length > 254 ||
      !emailPattern.test(email.trim()) ||
      typeof subject !== "string" ||
      !subject.trim() ||
      subject.trim().length > 120 ||
      /[\r\n]/.test(subject) ||
      typeof message !== "string" ||
      message.trim().length < 5 ||
      message.length > 5_000
    ) {
      return json({ error: "Check the form fields and try again." }, 400);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !from || !to) {
      return json({ error: "Contact email is not configured yet. Please email Imad directly." }, 503);
    }
    if (!emailPattern.test(to) || /[\r\n]/.test(from)) {
      return json({ error: "Contact email settings are invalid. Please email Imad directly." }, 503);
    }

    let response: Response;
    try {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email.trim(),
          subject: `Portfolio inquiry: ${subject.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\n${message.trim()}`,
        }),
        signal: AbortSignal.timeout(10_000),
      });
    } catch (error) {
      console.error("Contact email request failed:", error instanceof Error ? error.message : "unknown error");
      return json({ error: "Email delivery is temporarily unavailable. Please try again or email Imad directly." }, 502);
    }

    if (!response.ok) {
      console.error(`Resend returned HTTP ${response.status} for a contact inquiry.`);
      return json({ error: "Email delivery failed. Please try again or email Imad directly." }, 502);
    }

    return json({ sent: true }, 200);
  },
};
