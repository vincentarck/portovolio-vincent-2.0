import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  skill: Skill;
};
export default function Skilll({ skill }: Props) {
  console.log(skill);
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x:-100, 
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-400 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 absolute opacity-0 hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <p className="text-lg font-bold text-black opacity-100">
            {skill?.title}
          </p>
          <p className="text-lg font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
