const services = [
  {
    num: "01",
    title: "Inbox & calendar",
    desc: "Daily inbox triage, scheduling, and meeting prep, so you open your calendar to a day that's already been thought through.",
  },
  {
    num: "02",
    title: "Client & customer support",
    desc: "First-line replies, ticket handling, and onboarding emails written in your voice, with clear escalation when something needs you directly.",
  },
  {
    num: "03",
    title: "Travel & event coordination",
    desc: "Bookings, itineraries, and vendor follow-ups for trips, offsites, and client events, confirmed and double-checked before you have to think about it.",
  },
  {
    num: "04",
    title: "Content scheduling",
    desc: "Queuing and posting across your social channels from a content calendar we build together, with captions lightly edited for each platform.",
  },
  {
    num: "05",
    title: "Research & data entry",
    desc: "Vendor comparisons, lead lists, and spreadsheet clean-up delivered in a format you can actually use, not a wall of raw notes.",
  },
  {
    num: "06",
    title: "Project coordination",
    desc: "Keeping tasks, deadlines, and handoffs visible across your team, chasing the things that would otherwise stall in someone's inbox.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 items-end gap-4 md:mb-14 md:grid-cols-2 md:gap-10">
          <h2 className="max-w-[14ch] font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Where your hours are going right now — and what I take instead.
          </h2>
          <p className="max-w-[42ch] text-mauve">
            Every engagement starts with your calendar and inbox, then
            expands into whatever is genuinely slowing you down. No task is
            too small to hand off.
          </p>
        </div>

        <div className="grid gap-3">
          {services.map((s) => (
            <div
              key={s.num}
              className="glass-card grid grid-cols-[32px_1fr] gap-4 p-5 md:grid-cols-[44px_1.1fr_1.4fr] md:items-center md:gap-7 md:p-6"
            >
              <span className="pt-0.5 font-display text-base font-medium text-pink-deep">
                {s.num}
              </span>
              <h3 className="col-span-1 font-display text-xl font-medium md:col-auto">
                {s.title}
              </h3>
              <p className="col-span-2 max-w-[46ch] text-mauve md:col-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
