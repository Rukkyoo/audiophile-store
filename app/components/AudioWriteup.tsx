import React from "react";
import Image from "next/image";

const AudioWriteup = () => {
  return (
    <div className="w-full flex justify-center mb-20 md:mb-32">
      <div className="w-full max-w-[1110px] px-6 lg:px-0 flex flex-col md:flex-row-reverse md:items-center md:gap-8 lg:gap-32">
        <div className="md:w-1/2">
          <Image
            src="/Bitmap-mobile.png"
            alt="Man wearing headphone"
            width={400}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="text-center md:text-left mt-10 md:mt-0 md:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-6 md:mt-0 text-black px-4 md:px-0">
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h1>
          <p className="text-gray-500 mt-6 px-2 md:px-0 text-sm md:text-base">
            Located at the heart of New York City, Audiophile is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products. Stop by our
            store to meet some of the fantastic people who make Audiophile the
            best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudioWriteup;
