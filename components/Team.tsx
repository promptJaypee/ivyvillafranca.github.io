const waysOfWorking = [
  {
    number: "01",
    title: "One familiar face",
    description:
      "Work directly with Ivy, who learns your preferences and keeps the details moving without extra handoffs.",
  },
  {
    number: "02",
    title: "Support that fits",
    description:
      "From inbox and calendar care to client follow-ups, the help is shaped around the way you already work.",
  },
  {
    number: "03",
    title: "Room to focus",
    description:
      "The small, easy-to-miss tasks get thoughtful attention, so you can put your energy where it matters most.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="bg-lavender px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-mauve">
            Meet my team
          </p>
          <h2
            id="team-heading"
            className="font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl"
          >
            Personal support starts with a real person.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.82fr_1.18fr] md:gap-8">
          <article className="flex flex-col rounded-2xl border border-line bg-blush/70 p-6 md:p-8">
            <div className="mb-7 flex min-h-[230px] items-center justify-center overflow-hidden rounded-xl bg-pink-soft">
              <svg
                viewBox="0 0 240 220"
                role="img"
                aria-label="Illustration with Ivy's initials"
                className="h-[220px] w-full max-w-[280px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="120" cy="110" r="86" fill="var(--pink)" />
                <circle
                  cx="120"
                  cy="110"
                  r="86"
                  stroke="var(--pink-deep)"
                  strokeWidth="2"
                />
                <path
                  d="M64 190c7-42 28-64 56-64s49 22 56 64"
                  fill="var(--pink-deep)"
                />
                <ellipse cx="120" cy="91" rx="35" ry="39" fill="var(--blush)" />
                <text
                  x="120"
                  y="103"
                  textAnchor="middle"
                  fontFamily="var(--font-fraunces), Georgia, serif"
                  fontSize="31"
                  fill="var(--plum)"
                >
                  IV
                </text>
              </svg>
            </div>
            <div className="mt-auto">
              <h3 className="font-display text-2xl font-medium">
                Ivy Gaye Villafranca
              </h3>
              <p className="mt-1 text-mauve">Virtual Assistant</p>
            </div>
          </article>

          <div className="flex flex-col justify-center">
            <p className="mb-5 max-w-[52ch] text-mauve">
              I work directly with founders and small teams, taking care of
              inboxes, calendars, client threads, and the details that keep a
              busy week on track. You get one thoughtful point of contact—not a
              rotating help desk.
            </p>

            <div className="divide-y divide-line border-y border-line">
              {waysOfWorking.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[36px_1fr] gap-4 py-5 md:grid-cols-[44px_1fr]"
                >
                  <span className="pt-0.5 font-display text-base font-medium text-pink-deep">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="mb-1 font-display text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="max-w-[48ch] text-sm text-mauve">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex self-start rounded-full bg-plum px-6 py-3 text-sm font-medium text-blush transition hover:bg-pink-deep hover:text-plum"
            >
              Get to know me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
