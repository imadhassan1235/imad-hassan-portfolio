import { Reveal } from "../components/Reveal";
import { profile } from "../data/site";

export default function Privacy() {
  return (
    <section className="px-6 pt-36 pb-24 lg:px-10 lg:pt-44">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-(--color-accent)">PRIVACY</p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            Privacy notice
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-(--color-ink-soft)">
            <p>
              When you use the contact form, the name, email address, subject and message you provide are sent to
              Imad Hassan so he can respond to your inquiry.
            </p>
            <p>
              Resend processes the message to deliver it. The message is retained in the recipient's email account;
              this portfolio does not store contact submissions in its own database or use them for marketing.
              Resend and your email provider may handle the information under their own privacy policies.
            </p>
            <p>
              Do not send passwords, financial details or other sensitive information through the contact form.
              To ask about or request deletion of an inquiry, email{" "}
              <a className="underline hover:text-(--color-accent)" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              .
            </p>
            <p>
              Links to other websites are governed by those websites' privacy practices.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
