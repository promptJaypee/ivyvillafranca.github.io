const testimonials = [
  {
    quote:
      "Ivy really knows her craft. She's responsive, always sees a project through from start to finish, and brings creative ideas and expertise I wouldn’t have thought of myself - especially around SEO and generating organic leads and traffic.
Beyond her excellent social media management, Ivy is extremely skilled at graphic design, which has been a massive asset to our brand.
She is incredibly dependable and proactive. As the #1 real estate team in New York City, we have a lot moving at once, and I can always count on her to take initiative and keep projects moving forward.
She's been a valuable part of our team and is truly lovely to work with!",
    name: "Julia",
    role: "Douglas Elliman, real estate",
  },
  {
    quote:
      "He caught two double-bookings before they became a problem and never once made me feel like I'd overloaded her.",
    name: "Juan Dela Cruz",
    role: "Operations lead, e-commerce brand",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"  
      className="px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-mauve">
              Kind words
            </p>
            <h2
              id="testimonials-heading"
              className="max-w-[18ch] font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl"
            >
            What it&apos;s like to hand things off.
            </h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-relaxed text-mauve">
            Sample testimonials for layout purposes. Replace these with
            client-approved feedback before publishing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass-card flex h-full flex-col p-7 md:p-9"
            >
              <div aria-hidden="true" className="mb-5 font-display text-4xl leading-none text-pink-deep">
                &ldquo;
              </div>
              <blockquote className="mb-8 flex-1 font-display text-xl leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-line pt-5">
                <div className="h-[38px] w-[38px] shrink-0 rounded-full bg-pink-soft" />
                <div>
                  <strong className="block text-sm">{t.name}</strong>
                  <span className="block text-sm text-mauve">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
