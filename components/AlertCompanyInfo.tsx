import Link from "next/link";
import React from "react";

type Props = {
  msg: string;
  link: string;
  setInfoCompany:(prev:boolean) => void
};
export default function AlertCompanyInfo({ msg, link, setInfoCompany }: Props) {
  return (
    <div
      className="bg-slate-200 border-t-4 border-gray-500 rounded-b text-teal-900 px-4 pt-3 shadow-md absolute top-[100%] md:top-[55%] md:left-[90%] z-10 w-56 h-56 overflow-scroll scrollbar-none"
      role="alert"
      onMouseEnter={() => setInfoCompany(true)} onMouseLeave={() => setInfoCompany(false)}
    >
      <div>
        <p className="font-bold">About</p>
        <p className="w-full text-sm" >{msg}</p>
        <Link href={link} target="_blank" className="text-sm font-semibold relative">Read More</Link>
      </div>
      <div className="sticky bottom-0 h-8 w-full backdrop-blur-sm"></div>
    </div>
  );
}
