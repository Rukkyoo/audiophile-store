"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex sticky top-0 w-[70%] pb-9 mt-8 text-white border-b border-b-gray-600 md:justify-between md:items-center">
        <div>
          <h1 className="text-[24px] font-black">audiophile</h1>
        </div>
        <div>
          <ul className="font-bold text-[13px] flex flex-row gap-6 ml-10">
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
        <span>
          <ShoppingCart />
        </span>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 w-full pb-9 mt-8 text-white border-b border-b-gray-600 flex justify-between items-center px-6">
        <span onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </span>
        <h1 className="text-[24px] font-black">audiophile</h1>
        <span>
          <ShoppingCart />
        </span>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-64 bg-black text-white z-50 md:hidden border-l border-l-gray-600">
            <div className="flex justify-between items-center p-4">
              <span onClick={() => setIsOpen(false)}>
                <X />
              </span>
            </div>
            <ul className="flex flex-col gap-4 p-4 font-bold text-[13px]">
              <li onClick={() => setIsOpen(false)} className="hover:text-[#D87D4A] tracking-[0.2em] transition-colors cursor-pointer">
                <Link href="/">HOME</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="hover:text-[#D87D4A] tracking-[0.2em] transition-colors cursor-pointer">
                <Link href="/headphones">HEADPHONES</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="hover:text-[#D87D4A] tracking-[0.2em] transition-colors cursor-pointer">
                <Link href="/speakers">SPEAKERS</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="hover:text-[#D87D4A] tracking-[0.2em] transition-colors cursor-pointer">
                <Link href="/earphones">EARPHONES</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
