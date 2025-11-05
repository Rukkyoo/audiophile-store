import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShopProduct from "./ShopProduct";
import AudioWriteup from "./AudioWriteup";
import Footer from "./Footer";

const SpeakerProductUnit = [
  {
    id: 1,
    image: "/image-product.jpg",
    type: "NEW PRODUCT",
    name: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    link: "/zx9-speaker",
  },
  {
    id: 2,
    image: "/zx7-speaker.jpg",
    name: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    link: "/zx7-speaker",
  },
/*   {
    id: 3,
    image: "/xx99-mark-1.jpg",
    name: "XX99 MARK I HEADPHONES",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    link: "/xx99-headphones",
  }, */
];

const SpeakerProduct = () => {
  return (
    <div className="text-black ">
      {SpeakerProductUnit.map((speaker, index) => (
        <div 
          key={speaker.id} 
         className={`mb-16 md:mb-24 px-5 md:px-10 lg:px-10  flex flex-col   ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } md:items-center md:gap-8 max-w-7xl mx-auto`}
        >
          <div className="md:w-1/2">
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={600}
              height={20}
              className="rounded-lg w-full h-auto lg:w-[400px] lg:mt-20"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center lg:px-10 md:items-start text-center md:text-left">
            <h6 className="text-[#D87D4A] text-xs md:text-sm tracking-[0.5em] md:tracking-[0.8em] mt-5 md:mt-0">
              {speaker.type}
            </h6>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-4 md:px-0 mb-4 mt-6">
              {speaker.name}
            </h1>
            <p className="text-center md:text-left text-gray-500 opacity-75 px-6 md:px-0 mb-5 text-sm md:text-base">
              {speaker.description}
            </p>
            <button className="px-6 md:px-8 text-sm py-3 bg-[#D87D4A] transition-all duration-300 text-white font-bold rounded hover:bg-[#FBAF85]">
              <Link href={speaker.link}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
      ))}

      <ShopProduct />
      <AudioWriteup />
      <Footer />
    </div>
  );
};

export default SpeakerProduct;
