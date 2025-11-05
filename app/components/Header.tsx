"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import ShopProduct from "./ShopProduct";
import CartModal from "./CartModal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsCartOpen, getTotalItems } = useCart();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-100 backdrop-blur-sm bg-[#181818]">
        {/* Desktop Header */}
        <div className="hidden md:flex w-[90%] lg:w-[80%] xl:w-[70%] mx-auto pb-9 mt-8 text-white border-b border-b-gray-600 md:justify-between md:items-center">
          <div>
            <h1 className="text-[24px] font-black">audiophile</h1>
          </div>
          <div>
            <ul className="font-bold text-[13px] flex flex-row gap-4 lg:gap-6 ml-4 lg:ml-10">
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
          <span
            className="relative cursor-pointer hover:text-[#D87D4A] transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {getTotalItems()}
              </span>
            )}
          </span>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden bg-[#181818] w-full pb-9 mt-8 text-white border-b border-b-gray-600 flex justify-between items-center px-6">
          <span onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </span>
          <h1 className="text-[24px] font-black">audiophile</h1>
          <span
            className="relative cursor-pointer hover:text-[#D87D4A] transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {getTotalItems()}
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="h-24 md:h-28" aria-hidden />

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 left-0 h-[80%]  scroll-auto w-full bg-white text-black z-50 md:hidden border-l border-l-gray-600">
            <div className="flex justify-between items-center p-4">
              <span onClick={() => setIsOpen(false)}>
                <X />
              </span>
            </div>
            <ShopProduct />
          </div>
        </>
      )}

      {/* Cart Modal */}
      <CartModal />
    </>
  );
};
