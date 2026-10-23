"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <h2 className="mb-4 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Let&apos;s see if it&apos;s a fit.
          </h2>
          <p className="max-w-[40ch] text-mauve">
            Tell me a bit about what&apos;s piling up. I&apos;ll reply within
            a day with a few times for a call.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a href="mailto:villafrancaivygaye.hernandez@gmail.com" className="flex items-center gap-3 text-[0.98rem]">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--pink-deep)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0">
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
              villafrancaivygaye.hernandez@gmail.com
            </a>
            <a href="#" className="flex items-center gap-3 text-[0.98rem]">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--pink-deep)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0">
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <line x1="4" y1="10" x2="20" y2="10" />
              </svg>
              Book directly on my calendar
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-mauve">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
              className="rounded border border-line bg-blush px-4 py-3 text-[0.98rem] outline-none focus:border-pink focus:ring-2 focus:ring-pink"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-mauve">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@company.com"
              className="rounded border border-line bg-blush px-4 py-3 text-[0.98rem] outline-none focus:border-pink focus:ring-2 focus:ring-pink"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-mauve">
              What&apos;s on your plate right now?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              maxLength={5000}
              placeholder="A sentence or two is plenty"
              className="resize-y rounded border border-line bg-blush px-4 py-3 text-[0.98rem] outline-none focus:border-pink focus:ring-2 focus:ring-pink"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start rounded-full bg-plum px-6 py-3 text-sm font-medium text-blush transition hover:bg-pink-deep hover:text-plum disabled:opacity-70"
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
                ? "Send another message"
                : "Send message"}
          </button>
          <p
            aria-live="polite"
            className="-mt-1 text-[0.84rem] text-mauve"
            role={status === "error" ? "alert" : "status"}
          >
            {status === "sent"
              ? "Thanks for reaching out. Your message was sent, and a copy is on its way to your email."
              : status === "error"
                ? "We couldn’t send your message. Please try again or email hello@ivyvillafranca.com"
                : "Your message will be sent to Ivy, and you’ll receive a copy by email."}
          </p>
        </form>
      </div>
    </section>
  );
}
