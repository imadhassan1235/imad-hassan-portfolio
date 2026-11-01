import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "../lib/lenis";
import { Link } from "../lib/router";
import { MagneticButton } from "../components/MagneticButton";
import { FloatingShapes } from "../components/FloatingShapes";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { achievements, projects, skills, profile } from "../data/site";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;
    const tween = gsap.to(img, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: img, start: "top top", end: "bottom top", scrub: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const triggers = gsap.utils.toArray<HTMLElement>(".reveal-gsap").map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
      }),
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-36 pb-24 lg:px-10 lg:pt-44">
        <FloatingShapes />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          >
            <motion.p
              variants={revealItem}
              className="text-xs font-medium tracking-[0.25em] text-(--color-accent)"
            >
              SOFTWARE DEVELOPER · FULL-STACK ENGINEER · AI AUTOMATION
            </motion.p>
            <motion.h1
              variants={revealItem}
              className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Software that
              <br />
              works while
              <br />
              <span className="italic text-(--color-accent)">you sleep</span>.
            </motion.h1>
            <motion.p variants={revealItem} className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
              I'm Imad Hassan, a software developer and full-stack engineer building websites, ERP systems,
              AI agents and automated workflows for businesses and clients.
            </motion.p>
            <motion.div variants={revealItem} className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <MagneticButton className="inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-7 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2">
                  Hire me <ArrowRight size={16} />
                </MagneticButton>
              </Link>
              <Link
                to="/about"
                data-cursor="grow"
                className="inline-flex items-center gap-2 rounded-full border border-(--color-line) px-7 py-3.5 text-sm font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
              >
                About Imad
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div ref={heroImgRef} className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/img/hero-portrait.png"
                alt="Portrait of Imad Hassan"
                className="aspect-[2/3] w-full object-cover"
                loading="eager"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeOutExpo }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-(--color-canvas) p-5 shadow-xl ring-1 ring-(--color-line) sm:-left-10"
            >
              <p className="font-display text-xl font-medium">Full-Stack + AI</p>
              <p className="text-xs text-(--color-ink-soft)">Web apps, bots and automation</p>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Biography */}
      <section className="relative bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">BIOGRAPHY</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Code, automation and a builder's mindset.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-(--color-ink-soft)">
              <p>
                I'm a software developer and full-stack engineer with years of experience turning ideas into
                working products — from custom ERP systems for schools and businesses to Shopify stores,
                portfolios and secure admin panels.
              </p>
              <p>
                I'm also an AI automation specialist, building intelligent agents, bots and n8n workflows
                that take repetitive work off your plate and keep your business moving.
              </p>
            </div>
            <Link
              to="/about"
              data-cursor="grow"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--color-accent) hover:underline"
            >
              More about me <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-xs tracking-[0.2em] text-(--color-accent)">EXPERTISE</p>
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

      {/* Projects */}
      <section className="bg-(--color-ink) px-6 py-24 text-(--color-canvas) lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-gold)">WHAT I BUILD</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Real products for real businesses.
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {projects.map((p) => (
              <motion.div variants={revealItem} key={p.title} className="border-t border-(--color-canvas)/15 pt-6">
                <p className="text-xs tracking-[0.2em] text-(--color-gold)">{p.tag}</p>
                <p className="mt-3 font-display text-xl font-medium">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-(--color-canvas)/65">{p.description}</p>
              </motion.div>
            ))}
          </RevealGroup>
          <p className="mt-12 text-sm text-(--color-canvas)/60">More projects coming soon — new work is added regularly.</p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">TOOLKIT</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Tools I work with.
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 flex flex-wrap gap-3" stagger={0.05}>
            {skills.map((k) => (
              <motion.span variants={revealItem} key={k} className="rounded-full border border-(--color-line) px-5 py-2.5 text-sm">
                {k}
              </motion.span>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-(--color-ink) px-6 py-24 text-(--color-canvas) lg:px-10">
        <FloatingShapes />
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-(--color-gold)">LET'S WORK TOGETHER</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Have an idea? Let's build it.
          </h2>
          <p className="mt-5 text-lg text-(--color-canvas)/65">
            Websites, AI bots, automations or business software — tell me what you need.
          </p>
          <a
            href={`mailto:${profile.email}`}
            data-cursor="grow"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-canvas) px-8 py-3.5 text-sm font-medium text-(--color-ink) transition-colors hover:bg-(--color-gold)"
          >
            {profile.email} <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>
    </>
  );
}
