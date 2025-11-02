import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-white flex flex-col text-center items-center bg-black">
      <h1 className="text-[24px] font-black mt-10">audiophile</h1>
      <div className="flex flex-col items-center text-center mt-10">
        <ul className="font-bold text-[13px] flex flex-col gap-6">
          <li className="hover:text-[#D87D4A] tracking-[0.2em] transition-colors cursor-pointer">
            <Link href="/">HOME</Link>
          </li>
          <li className="hover:text-[#D87D4A] tracking-[0.2em] transition-colors cursor-pointer">
            <Link href="/headphones">HEADPHONES</Link>
          </li>
          <li className="hover:text-[#D87D4A] tracking-[0.2em] transition-colors cursor-pointer">
            <Link href="/speakers">SPEAKERS</Link>
          </li>
          <li className="hover:text-[#D87D4A] tracking-[0.2em] transition-colors cursor-pointer">
            <Link href="/earphones">EARPHONES</Link>
          </li>
        </ul>
      </div>
      <p className="text-slate-400 mt-6 px-5 mb-10">
        Audiophile is an all in one stop to fulfill your audio needs. We’re a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="text-slate-400  px-5 mb-10">
        Copyright 2025. All Rights Reserved
      </p>
      <div className="flex flex-row gap-5 mb-10">
        <span className="hover:text-[#D87D4A] transition-colors delay-300">
          <Facebook />
        </span>
        <span className="hover:text-[#D87D4A] transition-colors delay-300">
          <Twitter />
        </span>
        <span className="hover:text-[#D87D4A] transition-colors delay-300">
          <Instagram />
        </span>
      </div>
    </div>
  );
};

export default Footer;
