import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-white flex flex-col text-center md:text-left items-center md:items-start bg-black w-full px-6 md:px-10 lg:px-16 py-10 md:py-16">
      <div className="w-full max-w-7xl mx-auto">
        {/* Top section with logo and nav */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-12">
          <h1 className="text-[24px] font-black mb-10 md:mb-0">audiophile</h1>
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <ul className="font-bold text-[13px] flex flex-col md:flex-row gap-6 md:gap-8">
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
        </div>

        {/* Description and social icons section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div className="md:max-w-xl">
            <p className="text-slate-400 text-sm md:text-base mb-8 md:mb-0">
              Audiophile is an all in one stop to fulfill your audio needs. We're a
              small team of music lovers and sound specialists who are devoted to
              helping you get the most out of personal audio. Come and visit our demo
              facility - we're open 7 days a week.
            </p>
          </div>
          <div className="flex flex-row gap-5 justify-center md:justify-end">
            <span className="hover:text-[#D87D4A] transition-colors cursor-pointer">
              <Facebook />
            </span>
            <span className="hover:text-[#D87D4A] transition-colors cursor-pointer">
              <Twitter />
            </span>
            <span className="hover:text-[#D87D4A] transition-colors cursor-pointer">
              <Instagram />
            </span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-slate-400 text-sm mt-8 md:mt-12">
          Copyright 2025. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
