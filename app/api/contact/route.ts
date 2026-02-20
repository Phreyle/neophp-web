export const runtime = "nodejs";

import * as nodemailer from "nodemailer";

type Payload = {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();
    const website = (body.website ?? "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing name, email, or message." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    // Honeypot: bots fill hidden fields
    if (website) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO ?? smtpUser;

    if (!smtpUser || !smtpPass || !to) {
      return Response.json(
        { ok: false, error: "Server email is not configured." },
        { status: 500 }
      );
    }

    // Gmail: prefer explicit host/port
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `NeoPHP Contact Form: ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;

    await transporter.sendMail({
      from: `"NeoPHP Website" <${smtpUser}>`,
      to,
      subject,
      text,
      replyTo: email,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ ok: false, error: "Failed to send." }, { status: 500 });
  }
}