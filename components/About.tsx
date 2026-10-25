export default function IVout() {
  return (
    <section id="about" className="px-5 py-16 md:px-8 md:py-24">
      <div className="glass-panel mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 p-6 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:p-12">
        <div className="mx-auto w-full max-w-[240px]">
          <svg
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="150" cy="150" r="146" fill="var(--pink-soft)" />
            <circle
              cx="150"
              cy="150"
              r="146"
              stroke="var(--pink)"
              strokeWidth={3}
            />
            <g transform="translate(150,158)">
              <ellipse cx="0" cy="-6" rx="52" ry="58" fill="var(--pink)" />
              <path
                d="M-70 96c0-48 31-82 70-82s70 34 70 82"
                fill="var(--pink)"
              />
            </g>
            <text
              x="150"
              y="166"
              textAnchor="middle"
              fontFamily="var(--font-fraunces), serif"
              fontSize="46"
              fill="var(--plum)"
            >
              IV
            </text>
          </svg>
        </div>

        <div>
          <p className="mb-5 text-mauve">Hello, I&apos;m Ivy —</p>
          <p className="mb-5">
            I've spent close to four years working directly with founders and
            small teams as their virtual assistant — inbox, calendar, client
            threads, and the details nobody notices until they go wrong.
          </p>
          <p className="mb-5">
            I keep things personal instead of ticket-based. You get one person
            who learns how you think and adapts to your workflow, not a rotating
            help desk.
          </p>
          <p className="mb-5 text-mauve">
            I keep a light caseload on purpose — usually four clients at a time
            — so every inbox I touch actually gets my attention.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {[
              "Detail-driven",
              "Clear communicator",
              "Calm under deadline",
              "Discreet with client info",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3.5 py-1.5 text-sm text-mauve"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
