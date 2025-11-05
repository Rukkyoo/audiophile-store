import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductDesc = () => {
  return (
    <div className="w-full">
      {/* ZX9 Speaker Section */}
      <div className="bg-[#D87D4A] mb-10 mx-5 md:mx-8 lg:mx-10 pt-15 flex flex-col md:flex-row items-center md:items-end text-center md:text-left text-white rounded-lg overflow-hidden md:py-16 lg:py-20">
        <div className="md:w-1/2  flex justify-center md:justify-end md:pr-8 lg:pr-16">
          <Image
            src="/zx9-speaker.png"
            alt="ZX9 Speaker"
            width={180}
            height={40}
            className="md:w-[200px] lg:w-[250px] md:h-auto "
          />
        </div>
        <div className="md:w-1/2 md:pl-8 lg:pl-16 md:pr-8 lg:pr-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-6 md:mt-0 text-white px-10 md:px-0">
            ZX9 SPEAKER
          </h1>
          <p className="text-white opacity-75 px-10 md:px-0 mb-6 md:mb-8 text-sm md:text-base max-w-md">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <button className="mt-6 md:mt-0 px-6 text-sm py-3 mb-10 md:mb-0 bg-black text-white font-bold rounded hover:bg-gray-800 transition-colors">
            <Link href="/zx9-speaker">SEE PRODUCT</Link>
          </button>
        </div>
      </div>

      {/* ZX7 Speaker Section */}
      <div className="mb-10 mx-5  md:mx-8 lg:mx-10 h-fit flex flex-col items-center text-center text-white rounded-lg relative">
        <Image
          src="/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          width={600}
          height={40}
          className="rounded-lg relative w-full h-auto lg:hidden md:block"
        />
        <Image
          src="/zx7-pc.jpg"
          alt="ZX7 Speaker"
          width={600}
          height={40}
          className="rounded-lg relative w-full h-auto hidden lg:block"
        />
        <span className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 flex flex-col items-start">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
            ZX7 SPEAKER
          </h1>
          <button className="mt-2 md:mt-6 px-6 md:px-8 text-sm py-3 border border-black text-black font-bold rounded hover:bg-black hover:text-white transition-colors duration-300">
            <Link href="/zx7-speaker">SEE PRODUCT</Link>
          </button>
        </span>
      </div>

      {/* YX1 Earphones Section */}
      <div className="mb-10 mx-5 md:mx-8 lg:mx-10 h-fit flex flex-col md:flex-row md:gap-6 lg:gap-8 items-center text-center text-white rounded-lg">
        <div className="w-full md:w-1/2">
          <Image
            src="/yx1-earphones.jpg"
            alt="YX1 Earphones"
            width={410}
            height={40}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="bg-[#F1F1F1] w-full md:w-1/2 mt-5 md:mt-0 rounded-lg flex flex-col items-start pl-6 md:pl-10 lg:pl-16 py-8 md:py-10 lg:py-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
            YX1 EARPHONES
          </h1>
          <button className="mt-2 md:mt-6 px-6 md:px-8 text-sm py-3 mb-10 md:mb-0 border border-black text-black font-bold rounded hover:bg-black hover:text-white transition-colors duration-300">
            <Link href="/yx1-earphones">SEE PRODUCT</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
