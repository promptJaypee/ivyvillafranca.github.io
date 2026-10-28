export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-16 md:px-8 md:py-28">
      {/* Colour blobs the glass blurs over */}
      <div className="frost-scene" aria-hidden="true">
        <div className="frost-blob frost-blob--pink" />
        <div className="frost-blob frost-blob--ice" />
        <div className="frost-blob frost-blob--lilac" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* Left: copy + CTAs */}
        <div>
          <div className="frost-pill mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-mauve">
            <span className="h-2 w-2 rounded-full bg-pink-deep shadow-[0_0_10px_2px_rgba(228,120,236,0.65)]" />
            Virtual Assistant for founders and business owners
          </div>

          <h1 className="mb-6 max-w-[16ch] font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            The Organized Calm Behind Your Busiest Days.
          </h1>

          <p className="mb-9 max-w-[50ch] text-lg text-mauve">
            I help entrepreneurs and business owners manage daily tasks,
            grow their online presence, and keep digital projects running
            smoothly through creative and reliable support.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="frost-btn frost-btn--primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              Book for Free Consultation
            </a>
            <a
              href="#services"
              className="frost-btn frost-btn--secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              Explore My Services
            </a>
          </div>
        </div>

        {/* Right: illustration + stats */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          {/* Glass shards behind the panel so the blur has something to refract */}
          <div
            className="frost-shard glass-card -right-6 -top-8 hidden h-28 w-28 rounded-[2rem] sm:block"
            style={{ ["--r" as string]: "14deg" }}
            aria-hidden="true"
          />
          <div
            className="frost-shard glass-card -bottom-8 -left-8 hidden h-20 w-20 rounded-3xl sm:block"
            style={{ ["--r" as string]: "-10deg", animationDelay: "-4s" }}
            aria-hidden="true"
          />

          <div className="glass-panel relative overflow-hidden">
            <div className="p-6 md:p-8">
              <svg
                viewBox="0 0 420 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-auto w-full max-w-[320px]"
              >
                <defs>
                  <linearGradient id="frost-blob-fill" x1="60" y1="40" x2="380" y2="380" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#faaeff" />
                    <stop offset="0.55" stopColor="#dccaff" />
                    <stop offset="1" stopColor="#a9d4ff" />
                  </linearGradient>
                  <linearGradient id="frost-card-fill" x1="140" y1="170" x2="280" y2="282" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="var(--f-card-tint)" stopOpacity="0.88" />
                    <stop offset="1" stopColor="var(--f-card-tint)" stopOpacity="0.35" />
                  </linearGradient>
                  <filter id="frost-soft-shadow" x="-20%" y="-20%" width="140%" height="150%">
                    <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#532f55" floodOpacity="0.22" />
                  </filter>
                </defs>

                {/* Frosted blob */}
                <path
                  d="M60 210C42 130 108 48 200 40C292 32 372 92 380 178C388 264 330 336 244 366C158 396 78 372 50 300C34 260 74 264 60 210Z"
                  fill="url(#frost-blob-fill)"
                  opacity={0.9}
                />
                <path
                  d="M60 210C42 130 108 48 200 40C292 32 372 92 380 178"
                  stroke="#fff"
                  strokeOpacity={0.7}
                  strokeWidth={2}
                  strokeLinecap="round"
                />

                {/* Sparkles (replace the original dots) */}
                <g fill="#fff">
                  <path d="M150 150l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
                  <path d="M290 120l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
                  <path d="M310 260l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" />
                </g>

                {/* Glass calendar card */}
                <g filter="url(#frost-soft-shadow)">
                  <rect x="140" y="170" width="140" height="112" rx="14" fill="url(#frost-card-fill)" />
                </g>
                <g stroke="var(--plum)" strokeWidth={1.4} strokeLinecap="round" fill="none">
                  <rect x="140" y="170" width="140" height="112" rx="14" stroke="#fff" strokeOpacity={0.95} strokeWidth={1.6} />
                  <line x1="140" y1="204" x2="280" y2="204" />
                  <line x1="168" y1="152" x2="168" y2="184" />
                  <line x1="252" y1="152" x2="252" y2="184" />
                  <path d="M170 236l20 20 42-46" stroke="var(--pink-deep)" strokeWidth={3.5} />
                </g>

                <path
                  d="M96 320c14 10 32 10 46-2"
                  stroke="#fff"
                  strokeOpacity={0.9}
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2.5 p-3 pt-0 sm:gap-3 sm:p-4 sm:pt-0">
              <div className="frost-tile flex flex-col gap-1 rounded-2xl px-3 py-4 text-center sm:px-4 sm:py-5">
                <strong className="font-display text-2xl font-medium">5 yrs</strong>
                <span className="text-xs text-mauve sm:text-sm">Supporting businesses remotely</span>
              </div>
              <div className="frost-tile flex flex-col gap-1 rounded-2xl px-3 py-4 text-center sm:px-4 sm:py-5">
                <strong className="font-display text-2xl font-medium">GMT+8</strong>
                <span className="text-xs text-mauve sm:text-sm">Based in the Philippines</span>
              </div>
              <div className="frost-tile flex flex-col gap-1 rounded-2xl px-3 py-4 text-center sm:px-4 sm:py-5">
                <strong className="font-display text-2xl font-medium">5 hrs</strong>
                <span className="text-xs text-mauve sm:text-sm">Typical reply time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
