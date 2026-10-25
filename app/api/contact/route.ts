import { Resend } from "resend";

export const runtime = "nodejs";

type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  preferredDate?: unknown;
};

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  const submission = body as ContactSubmission;
  const name =
    typeof submission.name === "string" ? submission.name.trim() : "";
  const email =
    typeof submission.email === "string" ? submission.email.trim() : "";
  const message =
    typeof submission.message === "string" ? submission.message.trim() : "";
  const preferredDate =
    typeof submission.preferredDate === "string"
      ? submission.preferredDate.trim()
      : "";
  const parsedPreferredDate = preferredDate
    ? new Date(`${preferredDate}T00:00:00.000Z`)
    : null;

  if (
    !name ||
    name.length > 100 ||
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message ||
    message.length > 5000 ||
    (preferredDate &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(preferredDate) ||
        !parsedPreferredDate ||
        Number.isNaN(parsedPreferredDate.getTime()) ||
        parsedPreferredDate.toISOString().slice(0, 10) !== preferredDate))
  ) {
    return Response.json(
      {
        error:
          "Please check your name, email, preferred date, and message, then try again.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !recipient) {
    console.error(
      "Contact form email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_TO_EMAIL.",
    );
    return Response.json(
      { error: "The contact form is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const [ownerEmail, clientEmail] = await Promise.all([
      resend.emails.send({
        from,
        to: recipient,
        replyTo: email,
        subject: `New website inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}${preferredDate ? `\nPreferred call date: ${preferredDate}` : ""}\n\nMessage:\n${message}`,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: "Thanks for getting in touch",
        text: `Hi ${name},\n\nThanks for reaching out to Ivy. Your message has been received:\n\n${message}\n\nIvy will be in touch within a day.\n\nBest,\nIvy Villafranca`,
      }),
    ]);

    if (ownerEmail.error || clientEmail.error) {
      console.error("Resend failed to deliver a contact form email.", {
        ownerEmail: ownerEmail.error,
        clientEmail: clientEmail.error,
      });
      return Response.json(
        { error: "We couldn’t send your message. Please try again later." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Unexpected error sending contact form emails.", error);
    return Response.json(
      { error: "We couldn’t send your message. Please try again later." },
      { status: 502 },
    );
  }
}
