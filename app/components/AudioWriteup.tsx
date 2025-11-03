import React from "react";
import Image from "next/image";

const AudioWriteup = () => {
  return (
    <div>
      <div className="px-5">
        <Image
          src="/Bitmap-mobile.png"
          alt="Man wearing headphone"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-4 mt-6 text-black px-10">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="text-gray-500 mt-6 px-5 mb-28">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AudioWriteup;
