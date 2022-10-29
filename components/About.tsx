import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";

type Props = {
  about: PageInfo;
};

export default function About({ about }: Props) {
  return (
    <div className="flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center relative px-10 space-y-5 md:space-y-12 pt-44 md:pt-32">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>
      <motion.img
        src="/profile.png"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="!mb-0 md:!mb-28 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-96 md:h-96 xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[600px]"
      />
      <motion.div
        className="space-y-8 md:ml-8"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ bounce: 0.5, type: "spring", duration: 1 }}
      >
        <h4 className="text-3xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#6AF2F0]/60">little</span>{" "}
          background
        </h4>
        <div className="!mb-36 sm:mb-0 text-sm md:text-base relative overflow-y-scroll scrollbar-none max-h-56">
          {about.backgroundInformation}
          <div className="sticky bottom-0 h-8 w-full backdrop-blur-[3px]"></div>
        </div>
      </motion.div>
    </div>
  );
}
