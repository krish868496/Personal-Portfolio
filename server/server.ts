"use server";
import { getErrorMessage, validateString } from "@/utils/util";
import { Resend } from "resend";
import ContactFormEmail from "../email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.EMAIL_API);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  if (!validateString(email, 255) || !validateString(message, 5000)) {
    throw new Error("Invalid email or message length");
  }
  if (!email && !message) {
    throw new Error("Please provide an email and a message");
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "krishandevraj8@gmail.com",
      subject: "Thank you for your interest!",
      replyTo: email as string,
      // text: message as string,
      // react: <ContactFormEmail message={message} email={email} />
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error:unknown) {
   
    return{
      error: getErrorMessage(error)
    }
  }
};
