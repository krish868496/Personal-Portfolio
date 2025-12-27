"use client";

import React, { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hook";
import { sendEmail } from "../../../server/server";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.div
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold">Contact</h3>

      <p className="text-gray-700 dark:text-white/80 mt-2">
        Interested in working together, hiring me, or discussing a project?
        Reach out at{" "}
        <a
          className="underline font-medium"
          href="mailto:krishandevraj8@gmail.com"
        >
          krishandevraj8@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form
        ref={formRef}
        action={async (formData) => {
          await sendEmail(formData);
          toast.success("Message sent successfully 🚀");
          formRef.current?.reset(); // ✅ Clear form after submit
        }}
        className="flex flex-col mt-10 gap-3 dark:text-black"
      >
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="h-14 px-4 rounded-lg borderBlack transition-all
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
        />

        {/* Reason */}
        <select
          name="reason"
          required
          className="h-14 px-4 rounded-lg borderBlack transition-all
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
        >
          <option value="">Reason for contact</option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Freelance Project">Freelance Project</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Tell me about your requirement..."
          required
          className="h-52 p-4 rounded-lg borderBlack transition-all
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={pending}
          className="group mt-2 flex items-center justify-center gap-2
          h-[3rem] w-[8rem] rounded-full bg-gray-900 text-white
          transition-all hover:scale-110 hover:bg-gray-950 active:scale-105
          disabled:scale-100 disabled:opacity-60
          dark:bg-white dark:bg-opacity-10"
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
          ) : (
            <>
              Send
              <FaPaperPlane
                className="text-xs opacity-70 transition-all
              group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
