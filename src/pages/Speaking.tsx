import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { Link } from "../lib/router";
import { services, process } from "../data/site";

export default function Speaking() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-20 lg:px-10 lg:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">SERVICES</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Built to your needs.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
              From websites and ERP systems to AI agents and automated workflows — made on demand for you.
            </p>
            <Link
              to="/contact"
              data-cursor="grow"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-7 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
            >
              Start a project <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/img/speaking-stage.png"
              alt="Developer workspace with an AI workflow"
              className="aspect-video w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">WHAT I OFFER</p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.08}>
            {services.map((topic, i) => (
              <motion.div
                variants={revealItem}
                key={topic}
                className="flex items-start gap-4 rounded-2xl border border-(--color-line) bg-(--color-canvas) p-6"
              >
                <span className="font-display text-2xl text-(--color-accent)">0{i + 1}</span>
                <p className="font-display text-xl font-medium leading-snug">{topic}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">HOW IT WORKS</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Simple, clear, on demand.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 divide-y divide-(--color-line) border-y border-(--color-line)" stagger={0.06}>
            {process.map((p, i) => (
              <motion.div variants={revealItem} key={p} className="flex items-center gap-6 py-6">
                <span className="text-sm font-medium text-(--color-accent)">0{i + 1}</span>
                <span className="font-display text-lg font-medium">{p}</span>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
