import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRoutePath } from "../lib/router";
import { nav } from "../data/site";
import { MagneticButton } from "./MagneticButton";

export function Nav() {
  const path = useRoutePath();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-(--color-canvas)/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="font-display text-xl font-medium tracking-tight" data-cursor="grow">
          Imad Hassan
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-cursor="grow"
              className={`text-sm tracking-wide transition-colors hover:text-(--color-accent) ${
                path === item.to ? "text-(--color-accent)" : "text-(--color-ink-soft)"
              }`}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact">
            <MagneticButton className="rounded-full bg-(--color-ink) px-6 py-3 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2">
              Hire me
            </MagneticButton>
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-(--color-ink) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-(--color-line) bg-(--color-canvas) px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-base ${path === item.to ? "text-(--color-accent)" : "text-(--color-ink)"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-(--color-ink) px-6 py-3 text-sm font-medium text-(--color-canvas)"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
