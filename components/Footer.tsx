export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-mauve">
          © 2026 Ivy Gaye Villafranca. Virtual assistant services.
        </span>
        <div className="flex gap-4">
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--mauve)" strokeWidth={1.6} className="h-[18px] w-[18px]">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <circle cx="8" cy="8" r="0.5" fill="var(--mauve)" />
              <path d="M12 16v-3.2c0-1.2.9-1.8 2-1.8s2 .6 2 1.8V16" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--mauve)" strokeWidth={1.6} className="h-[18px] w-[18px]">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="0.6" fill="var(--mauve)" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
