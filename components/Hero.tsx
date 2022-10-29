import { Cursor, useTypewriter } from "react-simple-typewriter";
import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";
import {motion} from "framer-motion"
type Props = {
  pageInfo: PageInfo
}
export default function Hero({pageInfo}:Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My Name's is ${pageInfo?.name}`,
      "Guy-who-loves-Share.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2300,
  });
  return (
    <motion.div 
    initial={{opacity:0, y:200}}
    transition={{duration:2,  bounce: 0.5, type: "spring"}}
    whileInView={{opacity:1, y:0}}
    className="flex h-screen flex-col space-y-5 md:space-y-8 items-center justify-center text-center overflow-hidden pt-52 md:pt-32 ">
      <BackgroundCircle />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        className="w-32 h-32 lg:w-44 lg:h-44 rounded-full object-cover"
        alt="profile"
      />
      <div className="max-w-[95%] break-words">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-slate-500 text-5xl lg:text-6xl px-10 font-semibold min-h-[150px] md:min-h-0 md:my-2">
          <span className="">{text}</span> <Cursor cursorColor="#6AF2F0" />{" "}
        </h1>
      </div>

      <div className="flex gap-5 flex-wrap justify-center relative z-30">
        <Link href="#about">
          <button className="heroButton cursor-pointer">About</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Project</button>
        </Link>
      </div>
    </motion.div>
  );
}
