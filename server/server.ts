"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API);
export const sendEmail = async (formData: FormData) => {
  console.log("working on server...");
  const email = formData.get("email");
  const message = formData.get("message");
  if (!email && !message) {
        throw new Error("Please provide an email and a message");
  }
  resend.emails.send({
    from: "krishandevraj8@gmail.com",
    to: email,
    subject: "Thank you for your interest!",
    template: "template-id",
    templateData: {
      email,
      message,
    },
  });
};
