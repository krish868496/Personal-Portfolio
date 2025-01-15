"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hook";
import { sendEmail } from "../../../server/server";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();
  return (
    <motion.div
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold">Contact</h3>
      <p className="text-gray-700 dark:text-white/80">
        Please Contact me directly at{" "}
        <a className="underline" href="mailto:krishandevraj8@gmail.com">
          krishandevraj8@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData);
          toast.success("Form sent successfully");
        }}
        className="flex flex-col mt-10 dark:text-black"
      >
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
        />
        <textarea
          name="message"
          required
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled={pending}
        >
          {pending ? (
            <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
