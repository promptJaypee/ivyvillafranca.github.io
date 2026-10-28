"use client";

import { useRef, useState } from "react";

// TODO: Ivy's copy is yours. Members two and three are placeholders:
// replace their name, role, initials, intro and the three "ways" with real content.
const members = [
  {
    name: "Ivy Gaye Villafranca",
    role: "Virtual Assistant",
    initials: "IV",
    base: "var(--pink)",
    deep: "var(--pink-deep)",
    intro:
      "I work directly with founders and small teams, taking care of inboxes, calendars, client threads, and the details that keep a busy week on track. You get one thoughtful point of contact—not a rotating help desk.",
    ways: [
      {
        title: "One familiar face",
        description:
          "Work directly with Ivy, who learns your preferences and keeps the details moving without extra handoffs.",
      },
      {
        title: "Support that fits",
        description:
          "From inbox and calendar care to client follow-ups, the help is shaped around the way you already work.",
      },
      {
        title: "Room to focus",
        description:
          "The small, easy-to-miss tasks get thoughtful attention, so you can put your energy where it matters most.",
      },
    ],
  },
  {
    name: "Team Member Two",
    role: "Role / Title",
    initials: "TM",
    base: "#b4daff",
    deep: "#7fb8ff",
    intro:
      "Add a short introduction for Team Member Two here: what they take care of day to day and how they work with founders and small teams.",
    ways: [
      {
        title: "Add a strength",
        description:
          "Describe in one or two sentences what makes this team member's support useful to clients.",
      },
      {
        title: "Add a focus area",
        description:
          "Describe the kind of work they handle best, such as a service, a tool, or a type of project.",
      },
      {
        title: "Add a working style",
        description:
          "Describe how they communicate and keep clients updated while the work gets done.",
      },
    ],
  },
  {
    name: "Team Member Three",
    role: "Role / Title",
    initials: "TM",
    base: "#dccaff",
    deep: "#b79bff",
    intro:
      "Add a short introduction for Team Member Three here: what they take care of day to day and how they work with founders and small teams.",
    ways: [
      {
        title: "Add a strength",
        description:
          "Describe in one or two sentences what makes this team member's support useful to clients.",
      },
      {
        title: "Add a focus area",
        description:
          "Describe the kind of work they handle best, such as a service, a tool, or a type of project.",
      },
      {
        title: "Add a working style",
        description:
          "Describe how they communicate and keep clients updated while the work gets done.",
      },
    ],
  },
];

export default function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const next = (index + members.length) % members.length; // wraps around
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Ignore scroll events while the smooth scroll runs, so the text on the
    // right does not flicker through in-between members.
    lockRef.current = true;
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(
      () => {
        lockRef.current = false;
      },
      reduceMotion ? 50 : 700,
    );

    el.scrollTo({
      left: next * el.clientWidth,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActive(next);
  };

  const handleScroll = () => {
    if (lockRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (index !== active) setActive(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    }
  };

  const current = members[active];

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="px-5 py-16 md:px-8 md:py-24"
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
          {/* Team slider */}
          <article
            className="glass-panel flex flex-col p-6 md:p-8"
            aria-roledescription="carousel"
            aria-label="Team members"
            onKeyDown={handleKeyDown}
          >
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {members.map((member, i) => (
                <div
                  key={member.name}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${members.length}`}
                  aria-hidden={i !== active}
                  className="flex w-full shrink-0 snap-center flex-col"
                >
                  <div className="frost-avatar mb-7 flex min-h-[230px] items-center justify-center overflow-hidden rounded-xl">
                    <svg
                      viewBox="0 0 240 220"
                      role="img"
                      aria-label={`Illustration with ${member.name}'s initials`}
                      className="h-[220px] w-full max-w-[280px]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="120" cy="110" r="86" fill={member.base} />
                      <circle
                        cx="120"
                        cy="110"
                        r="86"
                        fill="none"
                        stroke="#fff"
                        strokeOpacity={0.8}
                        strokeWidth="2"
                      />
                      <path
                        d="M64 190c7-42 28-64 56-64s49 22 56 64"
                        fill={member.deep}
                      />
                      <ellipse
                        cx="120"
                        cy="91"
                        rx="35"
                        ry="39"
                        fill="var(--blush)"
                      />
                      <text
                        x="120"
                        y="103"
                        textAnchor="middle"
                        fontFamily="var(--font-fraunces), Georgia, serif"
                        fontSize="31"
                        fill="var(--plum)"
                      >
                        {member.initials}
                      </text>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-mauve">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider controls */}
            <div className="mt-7 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous team member"
                className="frost-icon-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="flex flex-col items-center gap-2">
                <div
                  className="flex items-center"
                  role="group"
                  aria-label="Choose team member"
                >
                  {members.map((member, i) => (
                    <button
                      key={member.name}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Show ${member.name}`}
                      aria-current={i === active}
                      className="p-2"
                    >
                      <span className="frost-dot block" />
                    </button>
                  ))}
                </div>
                <span
                  className="font-display text-xs tracking-[0.14em] text-mauve"
                  aria-live="polite"
                >
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(members.length).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next team member"
                className="frost-icon-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </article>

          {/* Right column: swaps with the active member */}
          <div className="flex flex-col justify-center">
            <div key={active} className="frost-swap">
              <p className="mb-5 max-w-[52ch] text-mauve">{current.intro}</p>

              <div className="divide-y divide-line border-y border-line">
                {current.ways.map((item, i) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-[36px_1fr] gap-4 py-5 md:grid-cols-[44px_1fr]"
                  >
                    <span className="pt-0.5 font-display text-base font-medium text-pink-deep">
                      {String(i + 1).padStart(2, "0")}
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
            </div>

            <a
              href="#contact"
              className="frost-btn frost-btn--primary mt-7 inline-flex self-start rounded-full px-6 py-3 text-sm font-medium"
            >
              Get to know me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
