import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  {
    console.log(projects);
  }
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 pt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:mt-14">
        {projects.map((project, ind) => (
          <div
            className="w-screen flex-shrink-0 snap-center p-10 flex flex-col justify-center items-center h-screen md:p-24 xl:p-44 space-y-5 lg:space-y-10"
            key={ind}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              src={urlFor(project.image).url()}
              alt="project"
              className="w-[90%] md:w-3/5  max-w-[665px] max-h-[375px] h-auto object-cover"
            />
            <div className="px-0 space-y-5 md:space-y-10 md:px-10 lg:max-w-5xl">
              <h4 className="text-2xl md:text-3xl font-semibold text-center">
                <span className="underline decoration-[#6AF2F0]/50 mr-3">
                  Case Study {ind + 1} of {projects.length}
                </span>
                {project.title}
              </h4>
              <p className="text-sm md:text-base">{project.description} </p>
              <div className="w-full justify-end mr-6 flex gap-3 font-semibold text-sm cursor-pointer">
                {project.linkToBuild && (
                  <Link href={project.linkToBuild} target="_blank">Live Demo</Link>
                )}
                {project.privateWork ? (
                  <p className="font-semibold text-base">Private Source</p>
                ) : (
                  <Link href={project.repoLink} target="_blank">Source Code</Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#A0E7E5]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
