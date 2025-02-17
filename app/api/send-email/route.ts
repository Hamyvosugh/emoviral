import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return NextResponse.json({ error: "همه فیلدها الزامی هستند!" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true, message: "ایمیل ارسال شد!" });
  } catch (error) {
    console.error("خطا در ارسال ایمیل:", error);
    return NextResponse.json({ error: "خطایی در ارسال ایمیل رخ داد." }, { status: 500 });
  }
}