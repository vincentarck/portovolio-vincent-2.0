import React from "react";
import { motion } from "framer-motion";
import Skil from "./Skil";
import { Skill } from "../typing";

type Props = {
  skills:Skill[]
};
export default function Skils({skills}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center space-y-0 mx-auto items-center"
    >
        <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl ">Skills</h3>
        <h3 className="absolute top-[10rem] uppercase tracking-[3px] text-gray-500 text-2xl ">Hover over a skill for current proficiency</h3>

        <div className="grid grid-cols-3 pt-28 md:pt-32 md:grid-cols-4 gap-5 px-10">
            {skills.map(skill => (
              <Skil key={skill._id} skill={skill}/>
            ))}
        </div>
    </motion.div>
  );
}
