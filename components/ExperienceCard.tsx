import React, { useState } from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import AlertCompanyInfo from "./AlertCompanyInfo";
type Props = {
  data: Experience;
};
export default function ExperienceCard({ data }: Props) {
  const [infoCompany, setInfoCompany] = useState(false);
  return (
    <article className="flex flex-col space-y-7 flex-shrink-0 rounded-lg items-center w-full sm:w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden min-h-[70vh]">
      <motion.img
        src={urlFor(data?.companyImage).url()}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="space-y-3 px-5 sm:px-10 lg:px-28">
        <h4 className="text-3xl md:text-4xl font-light">{data?.jobTitle}</h4>
        <div className="flex justify-between w-max items-center p-2 relative">
          <p className="text-xl md:text-2xl font-semibold">{data?.company}</p>
          <div className="pt-1 ml-2">
            <InformationCircleIcon
              className="text-slate-200 h-6 w-6 mt-[0.1rem] z-20 relative"
              onMouseEnter={() => setInfoCompany(true)}
              onMouseLeave={() => setInfoCompany(false)}
            />
          </div>
          {infoCompany && (
            <AlertCompanyInfo
              msg={data.about}
              link={data?.profileCompany}
              setInfoCompany={setInfoCompany}
            />
          )}
        </div>

        <div className="flex space-x-2 py-2">
          {/* Tech stacks */}
          {data?.technologies?.map((tech, ind) => (
            <img
              key={ind}
              src={urlFor(tech?.image).url()}
              alt="tech"
              className="w-7 h-7 md:w-10 md:h-10"
            />
          ))}
        </div>

        <p className="py-2">
          <span className="font-semibold text-sky-200">
            Start {data.dateStarted}
          </span>{" "}
          -{" "}
          {data?.isCurrentlyWorkingHere ? (
            <span className="font-semibold text-sky-200">Present</span>
          ) : (
            <span className="font-semibold text-sky-200">
              End {data.dateStarted}
            </span>
          )}
        </p>

        <ul
          className={`relative break-words overflow-hidden ${
            data?.points.length >= 4 && "overflow-scroll"
          } max-h-56 space-y-3 scrollbar-none`}
        >
          {data?.points.map((resp, ind) => (
            <li className="listDesc" key={ind}>
              <span className="font-semibold mr-2 text-lg">-</span>
              {resp}
            </li>
          ))}
          <li className="sticky  bottom-0 h-8 w-full backdrop-blur-sm"></li>
        </ul>
      </div>
    </article>
  );
}
