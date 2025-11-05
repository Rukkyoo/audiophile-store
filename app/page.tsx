"use client";
import { Header } from "./components/Header";
import ShopProduct from "./components/ShopProduct";
import ProductDesc from "./components/ProductDesc";
import AudioWriteup from "./components/AudioWriteup";
import Footer from "./components/Footer"
import Image from "next/image";
import Link from "next/link.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-[#141414] w-full flex flex-row items-center justify-center">
        <Header />
      </header>
      <main className=" w-full flex flex-col items-center">
        <section className="flex min-h-screen text-white flex-col items-center  w-full  lg:w-full relative">
          {/* Background image for small screens */}
          <div
            className="md:hidden opacity-40 absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/landing-headphones.png)",
              backgroundPosition: "center",
            }}
          ></div>
          {/* Image component for larger screens (Tablet) */}
          <Image
            src="/landing-headphones.png"
            alt="Headphones Banner"
            width={900}
            height={400}
            className="hidden lg:hidden md:block opacity-100"
          />
          
          {/* Background image for PC screens */}
          <div
            className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/home-hero-pc.jpg)",
            }}
          ></div>

          {/* Absolute positioned content for all screens */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-md lg:mr-[600px]  lg:flex lg:flex-col lg:items-start">
              <p className="text-xs md:text-sm text-gray-300 tracking-[0.5em] md:tracking-[1em]">
                NEW PRODUCT
              </p>
              <h1 className="text-3xl lg:text-[56px] md:text-4xl font-bold mb-4 mt-6 text-white lg:text-left">
                XX99 MARK II HEADPHONES
              </h1>
              <p className="text-white lg:text-[15px] opacity-75 px-4 w-full lg:text-left lg:px-0 lg:pr-20 md:px-10 text-sm md:text-base">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast
              </p>
              <button className="mt-6 px-6 py-3 bg-[#D87D4A] transition-all duration-300 text-white font-bold rounded hover:bg-[#FBAF85]">
                <Link href="/xx99-headphones">  
                SEE PRODUCT
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <ShopProduct />
        </section>

        <section className="bg-white w-full flex flex-col justify-center items-center md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <ProductDesc />
        </section>

        <section className="flex flex-col bg-white items-center w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <AudioWriteup />
        </section>

        <section className="flex flex-col bg-[#101010] items-center w-full  ">
          <Footer />
        </section>
      </main>
    </div>
  );
}