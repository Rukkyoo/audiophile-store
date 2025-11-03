import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductDesc = () => {
  return (
    <div>
      {/* ZX9 Speaker Section */}
      <div className="bg-[#D87D4A] mb-10 mx-5 pt-15 flex flex-col items-center text-center text-white rounded-lg">
        <Image
          src="/zx9-speaker.png"
          alt="ZX9 Speaker"
          width={180}
          height={40}
        />
        <h1 className="text-4xl font-bold mb-4 mt-6 text-white px-20">
          ZX9 SPEAKER
        </h1>
        <p className="text-white opacity-75 px-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound
        </p>
        <button className="mt-6 px-6 text-sm py-3 mb-10 bg-black text-white font-bold rounded hover:bg-gray-800">
          <Link href="/zx9-speaker">SEE PRODUCT</Link>
        </button>
      </div>

      {/* ZX7 Speaker Section */}
      <div className="mb-10 mx-5 h-fit flex flex-col items-center text-center text-white rounded-lg">
        <Image
          src="/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          width={600}
          height={40}
          className="rounded-lg relative"
        />
        <span className="absolute left-8 mt-20 ml-4 flex flex-col items-start ">
          <h1 className="text-3xl font-bold mb-4 mt-6 text-black ">
            ZX7 SPEAKER
          </h1>
          <button className="mt-6 px-6 text-sm py-3 mb-10 border border-black text-black font-bold rounded hover:bg-black hover:text-white transition-colors duration-300">
            <Link href="/zx7-speaker">SEE PRODUCT</Link>
          </button>
        </span>
      </div>

      {/* YX1 Earphones Section */}
      <div className="mb-10 mx-5 h-fit flex flex-col items-center text-center text-white rounded-lg">
        <Image
          src="/yx1-earphones.jpg"
          alt="YX1 Earphones"
          width={410}
          height={40}
          className="rounded-lg"
        />
        <div className="bg-[#F1F1F1] w-full mt-5 rounded-lg flex flex-col items-start pl-6">
          <h1 className="text-3xl font-bold mb-4 mt-6 text-black ">
            YX1 EARPHONES
          </h1>
          <button className="mt-6 px-6 text-sm py-3 mb-10 border border-black text-black font-bold rounded hover:bg-black hover:text-white transition-colors duration-300">
            <Link href="/yx1-earphones">SEE PRODUCT</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
