export default function Hero() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <div>
          <div className="mb-5 flex items-center gap-2.5 text-[0.95rem] text-mauve">
            <span className="h-2 w-2 rounded-full bg-pink" />
            Virtual Assistant for founders and business owners.
          </div>

          <h1 className="mb-6 max-w-[12ch] font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
            The Organized Calm Behind Your Busiest Days.
          </h1>

          <p className="mb-8 max-w-[46ch] text-lg text-mauve">
            I help entrepreneurs and business owners manage daily tasks, 
            grow their online presence, and keep digital projects running 
            smoothly through creative and reliable support.
          </p>

          <div className="mb-10 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-plum bg-plum px-6 py-3 text-sm font-medium text-blush transition hover:-translate-y-0.5 hover:border-pink-deep hover:bg-pink-deep hover:text-black hover:text-plum"
            >
              Book for Free Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition hover:border-pink-soft hover:bg-pink-soft"
            >
              Explore My Services
            </a>
          </div>

          <div className="flex gap-8 border-t border-line pt-7">
            <div className="flex flex-col gap-1">
              <strong className="font-display text-2xl font-medium">5 yrs</strong>
              <span className="text-sm text-mauve">Supporting businesses and projects remotely</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="font-display text-2xl font-medium">GMT+8</strong>
              <span className="text-sm text-mauve">Based in the Philippines</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="font-display text-2xl font-medium">5 hrs</strong>
              <span className="text-sm text-mauve">Typical reply time</span>
            </div>
          </div>
        </div>

        <div className="order-first mx-auto w-full max-w-[300px] md:order-none md:max-w-none">
          <svg viewBox="0 0 420 440" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M60 210C42 130 108 48 200 40C292 32 372 92 380 178C388 264 330 336 244 366C158 396 78 372 50 300C34 260 74 264 60 210Z"
              fill="var(--pink)"
              opacity={0.9}
            />
            <circle cx="150" cy="150" r="4" fill="var(--plum)" />
            <circle cx="290" cy="120" r="4" fill="var(--plum)" />
            <circle cx="310" cy="260" r="4" fill="var(--plum)" />
            <g stroke="var(--plum)" strokeWidth={1.4} strokeLinecap="round" fill="none">
              <rect x="140" y="170" width="140" height="112" rx="10" />
              <line x1="140" y1="204" x2="280" y2="204" />
              <line x1="168" y1="152" x2="168" y2="184" />
              <line x1="252" y1="152" x2="252" y2="184" />
              <path d="M170 236l20 20 42-46" stroke="var(--pink-deep)" strokeWidth={3} />
            </g>
            <path
              d="M96 320c14 10 32 10 46-2"
              stroke="var(--plum)"
              strokeWidth={1.4}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
