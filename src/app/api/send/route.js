import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = 'force-dynamic';

const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  console.log("Email request received:", { email, subject, message });

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["tamiranar514@gmail.com"],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted from ${email}:</p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
