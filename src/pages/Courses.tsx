import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "../lib/router";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { projects } from "../data/site";

export default function Courses() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-16 lg:px-10 lg:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">PROJECTS</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Work I've built.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
              A look at the kinds of projects I deliver. More are being added soon.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/img/courses-hero.png"
              alt="Dashboards and chatbot interfaces"
              className="aspect-video w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-8 lg:grid-cols-3" stagger={0.1}>
            {projects.map((c) => (
              <motion.div
                variants={revealItem}
                key={c.title}
                className="flex flex-col rounded-3xl border border-(--color-line) bg-(--color-canvas) p-8"
              >
                <p className="text-xs tracking-[0.2em] text-(--color-accent)">{c.tag}</p>
                <h3 className="mt-4 font-display text-2xl font-medium">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-(--color-ink-soft)">{c.description}</p>
                                <Link to="/contact" className="mt-6">
                  <MagneticButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--color-ink) px-6 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2">
                    Start similar project <ArrowRight size={15} />
                  </MagneticButton>
                </Link>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">WHY WORK WITH ME</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              One developer, the whole stack.
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 text-left sm:grid-cols-2" stagger={0.08}>
            {[
              "Frontend, backend and AI under one roof",
              "Secure, clean designs with full admin control",
              "Built on demand around your business",
              "Automation that saves real hours every week",
            ].map((f) => (
              <motion.div variants={revealItem} key={f} className="flex items-start gap-3">
                <Check className="mt-0.5 shrink-0 text-(--color-accent)" size={18} />
                <p className="text-sm text-(--color-ink-soft)">{f}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
