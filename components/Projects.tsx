const projects = [
  {
    number: "01",
    category: "Inbox & client experience",
    title: "A calmer client inbox",
    description:
      "A sample inbox workflow for a growing creative studio: clear labels, thoughtful reply templates, and a simple path for urgent requests.",
    tags: ["Inbox management", "Email templates", "Client support"],
    visual: "inbox",
  },
  {
    number: "02",
    category: "Calendar & operations",
    title: "A week with room to think",
    description:
      "A sample weekly planning system that brings meetings, preparation time, and follow-ups into one easy-to-scan routine.",
    tags: ["Calendar management", "Meeting prep", "Follow-ups"],
    visual: "calendar",
  },
  {
    number: "03",
    category: "Research & coordination",
    title: "From scattered notes to a clear plan",
    description:
      "A sample vendor research board that organizes options, key details, and next steps so a founder can make decisions faster.",
    tags: ["Research", "Project coordination", "Documentation"],
    visual: "research",
  },
];

function ProjectPreview({ visual }: { visual: string }) {
  if (visual === "inbox") {
    return (
      <div className="rounded-2xl border border-line bg-blush p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
          <div>
            <span className="block text-xs text-mauve">MONDAY, 9:12 AM</span>
            <strong className="font-display text-lg">Inbox overview</strong>
          </div>
          <span className="rounded-full bg-pink-soft px-3 py-1 text-xs text-plum">
            All caught up
          </span>
        </div>
        <div className="space-y-3">
          {[
            ["Client approvals", "3 messages", "bg-pink-soft"],
            ["Needs a reply", "2 messages", "bg-lavender"],
            ["Filed for later", "5 messages", "bg-blush"],
          ].map(([label, count, color]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-xl border border-line px-4 py-3"
            >
              <span className="flex items-center gap-3 text-sm">
                <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                {label}
              </span>
              <span className="text-xs text-mauve">{count}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "calendar") {
    return (
      <div className="rounded-2xl border border-line bg-blush p-5 shadow-sm">
        <div className="mb-5 flex items-end justify-between border-b border-line pb-4">
          <div>
            <span className="block text-xs text-mauve">WEEK AT A GLANCE</span>
            <strong className="font-display text-lg">
              A little more breathing room
            </strong>
          </div>
          <span className="text-xs text-mauve">JUN 10–14</span>
        </div>
        <div className="grid grid-cols-5 gap-2 text-center text-xs text-mauve">
          {["M", "T", "W", "T", "F"].map((day, index) => (
            <div key={`${day}-${index}`} className="space-y-2">
              <span className="block">{day}</span>
              <div
                className={`h-24 rounded-lg ${
                  index === 2 ? "bg-pink-soft" : "bg-lavender"
                }`}
              >
                <span className="block px-1 pt-3 text-[10px] leading-tight text-plum">
                  {index === 2
                    ? "Focus time"
                    : index === 1
                      ? "Team sync"
                      : "Open"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-blush p-5 shadow-sm">
      <div className="mb-5 border-b border-line pb-4">
        <span className="block text-xs text-mauve">VENDOR COMPARISON</span>
        <strong className="font-display text-lg">
          The details, in one place
        </strong>
      </div>
      <div className="overflow-hidden rounded-xl border border-line">
        <div className="grid grid-cols-3 bg-lavender px-3 py-2 text-xs font-medium">
          <span>Option</span>
          <span>Timeline</span>
          <span>Next step</span>
        </div>
        {[
          ["Studio North", "2 weeks", "Request quote"],
          ["Kindred Co.", "3 weeks", "Review scope"],
          ["Common Thread", "1 week", "Book a call"],
        ].map(([company, timeline, next]) => (
          <div
            key={company}
            className="grid grid-cols-3 border-t border-line px-3 py-3 text-[11px] text-mauve"
          >
            <span className="font-medium text-plum">{company}</span>
            <span>{timeline}</span>
            <span>{next}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-mauve">
              Selected work
            </p>
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <h1 className="max-w-[13ch] font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
                Thoughtful support, made visible.
              </h1>
              <p className="max-w-[42ch] text-lg text-mauve">
                A few examples of the calm, clear systems I can create behind
                the scenes, so you can focus on the work ahead.
              </p>
            </div>
            <p className="mt-8 inline-flex rounded-full border border-line px-4 py-2 text-sm text-mauve">
              These are sample concepts, not completed client projects.
            </p>
          </div>
      </div>

      <div
          aria-label="Sample project concepts"
          className="px-5 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="glass-card flex flex-col p-4 md:p-5"
              >
                <div className="mb-6 rounded-2xl bg-pink-soft p-4">
                  <ProjectPreview visual={project.visual} />
                </div>
                <div className="flex-1 px-2 pb-3">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-mauve">
                    {project.number} / {project.category}
                  </p>
                  <h2 className="mb-3 font-display text-2xl font-medium leading-tight">
                    {project.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-mauve">
                    {project.description}
                  </p>
                  <ul
                    aria-label="Project services"
                    className="flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-mauve"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
      </div>

      <div className="px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl bg-plum p-8 text-blush md:flex-row md:items-center md:p-12">
            <div>
              <p className="mb-2 text-sm text-pink-soft">
                Have a project in mind?
              </p>
              <h2 className="font-display text-3xl font-medium">
                Let&apos;s make space for your next big thing.
              </h2>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-full bg-pink px-6 py-3 text-sm font-medium text-plum transition hover:-translate-y-0.5 hover:bg-pink-deep"
            >
              Tell me about it
            </a>
          </div>
      </div>
    </section>
  );
}
