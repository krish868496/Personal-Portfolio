"use server";

import { getErrorMessage, validateString } from "@/utils/util";
import { Resend } from "resend";
import ContactFormEmail from "../email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.EMAIL_API);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  const reason = formData.get("reason");

  // ✅ Basic presence check
  if (!email || !message || !reason) {
    return { error: "All fields are required." };
  }

  // ✅ Validation
  if (
    !validateString(email, 255) ||
    !validateString(message, 5000) ||
    !validateString(reason, 100)
  ) {
    return { error: "Invalid input values." };
  }

  // ✅ Dynamic subject based on reason
  const subjectMap: Record<string, string> = {
    "Job Opportunity": "New Job Opportunity Inquiry",
    "Freelance Project": "New Freelance Project Request",
    "General Inquiry": "New Contact Form Message",
  };

  const subject = subjectMap[reason as string] || "New Contact Form Submission";

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "krishandevraj8@gmail.com",
      replyTo: email as string,
      subject,
      react: React.createElement(ContactFormEmail, {
        email: email as string,
        message: message as string,
        reason: reason as any,
      }),
    });

    return { success: true };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
