const steps = [
  {
    n: 1,
    title: "Discovery call",
    desc: "A free 20-minute call about your week, your tools, and where things are slipping.",
  },
  {
    n: 2,
    title: "Trial week",
    desc: "One paid week on real tasks — no contract yet, just a fair test for both of us.",
  },
  {
    n: 3,
    title: "Set the rhythm",
    desc: "We agree on hours, tools, and a weekly check-in that fits how you like to work.",
  },
  {
    n: 4,
    title: "Ongoing support",
    desc: "Steady async coverage, with a short call whenever priorities shift.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 items-end gap-4 md:mb-14 md:grid-cols-2 md:gap-10">
          <h2 className="max-w-[14ch] font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            How we start working together.
          </h2>
          <p className="max-w-[42ch] text-mauve">
            A short runway before we&apos;re fully in step — designed so you
            can tell early whether it&apos;s a fit.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-x-0">
          <div className="pointer-events-none absolute left-[5%] right-[5%] top-[21px] hidden h-px bg-line md:block" />
          {steps.map((s) => (
            <div key={s.n} className="glass-card relative p-5 md:mr-3 md:min-h-[220px] md:p-6">
              <div
                className={`relative z-10 mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-full border font-display text-lg font-medium ${
                  s.n % 2 !== 0
                    ? "border-pink bg-pink text-plum"
                    : "border-line bg-blush"
                }`}
              >
                {s.n}
              </div>
              <h3 className="mb-2.5 font-display text-lg font-medium">{s.title}</h3>
              <p className="text-[0.96rem] text-mauve">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
