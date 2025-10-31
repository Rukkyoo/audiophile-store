"use client";
import { Header } from "./components/Header.jsx";
import ShopProduct from "./components/ShopProduct.jsx";
import ProductDesc from "./components/ProductDesc.jsx";
import AudioWriteup from "./components/AudioWriteup.jsx";
import Footer from "./components/Footer.jsx"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-[#141414] w-full flex flex-row items-center justify-center">
        <Header />
      </header>
      <main className="bg-[#141414] w-full">
        <section className="flex min-h-screen text-white flex-col items-center bg-[#141414] md:w-[70%] relative">
          {/* Background image for small screens */}
          <div
            className="md:hidden opacity-40 absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/landing-headphones.png)",
              backgroundPosition: "center",
            }}
          ></div>
          {/* Image component for larger screens */}
          <Image
            src="/landing-headphones.png"
            alt="Headphones Banner"
            width={900}
            height={400}
            className="hidden md:block opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-300 tracking-[1em]">
                NEW PRODUCT
              </p>
              <h1 className="text-4xl font-bold mb-4 mt-6 text-white">
                XX99 MARK II HEADPHONES
              </h1>
              <p className="text-white opacity-75 px-10">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast
              </p>
              <button className="mt-6 px-6 py-3 bg-[#D87D4A] transition-all duration-300 text-white font-bold rounded hover:bg-[#FBAF85]">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center md:w-[70%]">
          <ShopProduct />
        </section>

        <section className="bg-white w-full flex flex-col justify-center items-center md:w-[70%] ">
          <ProductDesc />
        </section>

        <section className="flex flex-col bg-white items-center md:w-[70%] ">
          <AudioWriteup />
        </section>

        <section className="flex flex-col bg-[#101010] items-center md:w-[70%]">
          <Footer />
        </section>
      </main>
    </div>
  );
}