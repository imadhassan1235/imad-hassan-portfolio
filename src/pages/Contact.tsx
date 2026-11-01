import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle, Mail, MapPin } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { social, profile } from "../data/site";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          subject: values.get("subject"),
          message: values.get("message"),
          website: values.get("website"),
        }),
      });
      const result = (await response.json()) as { error?: unknown };
      if (!response.ok) {
        throw new Error(typeof result.error === "string" ? result.error : "Your message could not be sent.");
      }
      setSent(true);
      form.reset();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Your message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="px-6 pt-36 pb-24 lg:px-10 lg:pt-44">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-(--color-accent)">CONTACT</p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            Let's start a conversation.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
            Tell me about your project — a website, an AI bot, an automation or a custom system.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-(--color-accent)" />
              <a href={`mailto:${profile.email}`} className="hover:text-(--color-accent)">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={18} className="text-(--color-accent)" />
              <span>Working with clients worldwide</span>
            </div>
          </div>

          <div className="mt-10 flex gap-5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="grow"
                className="text-sm font-medium text-(--color-ink-soft) hover:text-(--color-accent)"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-(--color-line) bg-(--color-canvas-alt) p-12 text-center">
              <CheckCircle2 className="text-(--color-accent)" size={36} />
              <p className="font-display text-xl font-medium">Message sent</p>
              <p className="max-w-sm text-sm text-(--color-ink-soft)">
                Thanks for reaching out. Your message has been delivered, and I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-(--color-line) bg-(--color-canvas-alt) p-8 sm:p-10">
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="c-website">Leave this field empty</label>
                <input id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    required
                    type="text"
                    className="w-full rounded-xl border border-(--color-line) bg-(--color-canvas) px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-xl border border-(--color-line) bg-(--color-canvas) px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <select
                  id="c-subject"
                  name="subject"
                  className="w-full rounded-xl border border-(--color-line) bg-(--color-canvas) px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                >
                  <option>New website</option>
                  <option>AI agent / bot</option>
                  <option>n8n automation</option>
                  <option>ERP / custom software</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="c-message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-(--color-line) bg-(--color-canvas) px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-(--color-accent)">
                  {error} You can also email{" "}
                  <a className="underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  .
                </p>
              )}
              {sending && <p role="status" className="text-sm text-(--color-ink-soft)">Sending your message…</p>}
              <p className="text-xs leading-relaxed text-(--color-ink-soft)">
                Your details are sent to Imad through Resend to handle this inquiry. Please do not include passwords or other sensitive information.{" "}
                <a className="underline" href="/privacy">Privacy notice</a>
              </p>

              <MagneticButton
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-full bg-(--color-ink) px-8 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
              >
                {sending ? <LoaderCircle size={16} className="animate-spin" /> : "Send message"}
              </MagneticButton>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
