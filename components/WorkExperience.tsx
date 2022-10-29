import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typing";

type Props = {
  experiences: Experience[];
};
export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-5 md:px-10 justify-evenly items-center mx-auto pt-20 "
    >
      <h3 className="uppercase text-gray-400 tracking-[20px] mb-5 md:mb-0 text-xl md:text-2xl">
        Experience
      </h3>

      <div className="w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2FF3E0]/80">
        {experiences?.map(exp => (
          <ExperienceCard key={exp._id} data={exp} />
        ))}
      </div>
    </motion.div>
  );
}
