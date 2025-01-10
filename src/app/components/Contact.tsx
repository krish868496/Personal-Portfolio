"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hook";
import { sendEmail } from "../../../server/server";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  // const sendEmail = async (formData: FormData) => {
  //   "use server";
  // };
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
      <h3 className="font-semibold text2xl">Contact</h3>
      <p className="text-gray-700">
        Please Contact me directly at{" "}
        <a className="underline" href="mailto:krishandevraj8@gmail.com">
          krishandevraj8@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="flex flex-col mt-10"
      >
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="rounded-lg borderBlack h-14/10"
        />
        <textarea
          name="message"
          className="p-4 my-3 rounded-lg borderBlack"
          placeholder="Your Message"
        ></textarea>
        <button
          className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center group"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:translate-y-1 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105" />
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
