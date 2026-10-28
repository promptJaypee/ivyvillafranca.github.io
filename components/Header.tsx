"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + 160;

        // The active section is the one whose top is closest to (but not below)
        // the marker. This no longer depends on the order of the `links` array,
        // so it stays correct even if the nav order differs from the page order.
        let current = "";
        let currentTop = -Infinity;

        // The section that sits lowest on the page, used for the bottom-of-page case.
        let lastHref = "";
        let lastTop = -Infinity;

        links.forEach(({ href }) => {
          const section = document.querySelector(href);
          if (!section) return;
          const top = section.getBoundingClientRect().top + window.scrollY;

          if (top <= marker && top > currentTop) {
            current = href;
            currentTop = top;
          }
          if (top > lastTop) {
            lastTop = top;
            lastHref = href;
          }
        });

        // A short last section (like Contact) may never reach the marker, because
        // the page runs out of room to scroll. At the very bottom, highlight it anyway.
        const atBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;

        setActiveSection(atBottom && lastHref ? lastHref : current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="font-display text-xl font-medium tracking-tight">
          Ivy Gaye Villafranca
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav>
            <ul className="flex gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={activeSection === l.href ? "location" : undefined}
                    className={`nav-link text-[0.96rem] transition-colors hover:text-plum ${
                      activeSection === l.href ? "text-plum" : "text-mauve"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="frost-btn frost-btn--secondary rounded-full px-6 py-3 text-sm font-medium"
          >
            Book a call
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="p-1 md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--plum)" strokeWidth={1.6} strokeLinecap="round" className="h-6 w-6">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={activeSection === l.href ? "location" : undefined}
                  className={`nav-link inline-block text-[0.98rem] transition-colors ${
                    activeSection === l.href ? "text-plum" : "text-mauve"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="frost-btn frost-btn--primary inline-block rounded-full px-6 py-3 text-sm font-medium"
              >
                Book a call
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
