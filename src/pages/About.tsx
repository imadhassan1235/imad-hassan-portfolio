import { ArrowRight } from "lucide-react";
import { Link } from "../lib/router";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { motion } from "motion/react";
import { achievements } from "../data/site";

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-20 lg:px-10 lg:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">ABOUT IMAD</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              The developer behind the build.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
              Software developer, full-stack engineer and AI automation specialist building practical
              products for clients and businesses.
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <MagneticButton className="inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-7 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2">
                Work with me <ArrowRight size={16} />
              </MagneticButton>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/img/about-portrait.png"
              alt="Imad Hassan, software developer"
              className="aspect-[2/3] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-(--color-ink-soft)">
          <Reveal>
            <p className="font-display text-2xl font-medium text-(--color-ink)">
              I build software that solves real problems — and I enjoy every part of it.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              As a full-stack engineer with years of experience, I've worked on many kinds of projects:
              ERP systems for different schools and businesses, Shopify e-commerce websites, personal brand
              websites and portfolios for clients, and full admin panels with complete CRUD and secure designs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              On the AI side, I specialise in automation and bots — creating AI agents and AI workflows on
              n8n, plus apps and AI tools that help people and teams work faster.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Whatever the project, I build on demand: I listen to what you need, then deliver something
              clean, secure and ready to grow with you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-xs tracking-[0.2em] text-(--color-accent)">WHAT I DO</p>
          </Reveal>
          <RevealGroup className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4" stagger={0.1}>
            {achievements.map((a) => (
              <motion.div variants={revealItem} key={a.label} className="border-l-2 border-(--color-line) pl-5">
                <p className="font-display text-4xl font-medium text-(--color-accent) sm:text-5xl">{a.number}</p>
                <p className="mt-2 text-sm leading-snug text-(--color-ink-soft)">{a.label}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

    </>
  );
}
