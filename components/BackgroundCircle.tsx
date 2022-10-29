import React from "react";
import { motion } from "framer-motion";
export default function BackgroundCircle() {
  return (
    <>
      <motion.div
        className="relative flex justify-center items-center top-10 max-h-[800px]"
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2.5, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 1],
          
        }}
        transition={{
          duration: 2.5,
        }}
      >
        <motion.div className="absolute border border-[#306f8d] rounded-full h-[200px] w-[200px] animate-ping mt-72" />
        <motion.div className="absolute border border-[#306f8d] rounded-full h-[500px] w-[500px] mt-72 animate-pulse opacity-50" />
        <motion.div className="absolute border border-[#306f8d] rounded-full h-[650px] opacity-7 w-[650px] animate-pulse mt-72" />
        <motion.div className="absolute border border-[#306f8d] rounded-full h-[800px] w-[800px] mt-72 animate-pulse" />
      </motion.div>
    </>
  );
}
