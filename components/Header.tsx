"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-blush/90 backdrop-blur-md">
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
                    className="text-[0.96rem] text-mauve transition-colors hover:text-plum"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium transition hover:border-pink-soft hover:bg-pink-soft"
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
                  className="text-[0.98rem] text-mauve"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-plum px-6 py-3 text-sm font-medium text-blush"
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
