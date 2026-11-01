import { Link } from "../lib/router";
import { nav, social, profile } from "../data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-(--color-ink) text-(--color-canvas)">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <p className="font-display text-2xl font-medium">Imad Hassan</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--color-canvas)/60">
              Software developer, full-stack engineer and AI automation specialist.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-(--color-canvas)/40">EXPLORE</p>
            <ul className="mt-4 space-y-3">
              {nav.slice(0, 3).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-(--color-canvas)/75 hover:text-(--color-canvas)">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-(--color-canvas)/40">CONNECT</p>
            <ul className="mt-4 space-y-3">
              {nav.slice(3).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-(--color-canvas)/75 hover:text-(--color-canvas)">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-(--color-canvas)/40">GET IN TOUCH</p>
            <a href={`mailto:${profile.email}`} className="mt-4 block text-sm text-(--color-canvas)/75 hover:text-(--color-canvas)">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-(--color-canvas)/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-(--color-canvas)/40">© 2026 Imad Hassan. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="text-xs tracking-wide text-(--color-canvas)/60 hover:text-(--color-canvas)">
              Privacy
            </Link>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="grow"
                className="text-xs tracking-wide text-(--color-canvas)/60 hover:text-(--color-canvas)"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
