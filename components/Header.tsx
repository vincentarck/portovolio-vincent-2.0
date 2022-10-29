import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typing";
type Props = {
  socials:Social[]
};

export default function Header({socials}: Props) {
  return (
    <header className="sticky top-5 z-20 mx-auto p-5 flex justify-between max-w-7xl items-start xl:items-center">
      <motion.div
        className="space-x-3"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
          rotate: 300,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          duration:1.3
        }}
      >
        {socials.map((social, key) => (
          <SocialIcon
          key={key}
          url={social.url}
          bgColor="transparent"
          fgColor="gray"
          target="_blank"
        />
        ))}
      </motion.div>

      <motion.div
        className="flex gap-2 items-center"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
          rotate: 300,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          duration:1.7
        }}
      >
        <SocialIcon
          url='https://mail.google.com/mail/?view=cm&fs=1&to=vincenthambaya@gmail.com&su=Let"s connect!'
          bgColor="transparent"
          fgColor="gray"
          network="email"
          target="_blank"
        />
        <span className="hidden uppercase text-gray-400 text-sm md:block">
          Get in Touch
        </span>
      </motion.div>
    </header>
  );
}
