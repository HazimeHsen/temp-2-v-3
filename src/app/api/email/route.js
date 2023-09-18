import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request) {
  const data = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const ToThem = {
    from: process.env.MY_EMAIL,
    to: data.email,
    subject: `Portfolio Contact`,
    text: "Thank You For Contacting Us. We Will Get Back to You As Soon As Possible!",
  };
  const ToMe = {
    from: {
      name: "Contact form",
      address: data.email,
    },
    to: process.env.MY_EMAIL,
    subject: `Portfolio Contact`,
    text: data.message + " " + data.subject,
  };
  try {
    await transport.sendMail(ToThem);
    await transport.sendMail(ToMe);

    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
