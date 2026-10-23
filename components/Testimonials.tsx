const testimonials = [
  {
    quote:
      "My inbox used to be the first thing I dreaded every morning. Now it's already sorted by the time I sit down.",
    name: "Priya Nair",
    role: "Founder, a design studio",
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
      className="bg-lavender px-5 py-16 md:px-8 md:py-24"
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
              className="flex h-full flex-col rounded-2xl border border-line bg-blush/70 p-7 md:p-9"
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
