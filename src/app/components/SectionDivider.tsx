"use client"
import React from 'react'
import {motion} from 'framer-motion'

const SectionDivider = () => {
  return (
    <motion.div
      className="hidden w-1 h-16 my-24 bg-gray-200 rounded-full sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}

export default SectionDivider