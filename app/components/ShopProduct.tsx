import React from "react";
import Link from "next/link";
import Image from "next/image";

const ShopProductData = [
  {
    id: 1,
    name: "HEADPHONES",
    image: "/headphones.webp",
    link: "/headphones",
  },
  {
    id: 2,
    name: "SPEAKERS",
    image: "/speakers.webp",
    link: "/speakers",
  },
  {
    id: 3,
    name: "EARPHONES",
    image: "/earphones.webp",
    link: "/earphones",
  },
];

const ShopProduct = () => {
  return (
    <div className="bg-white w-full flex justify-center pt-20 md:pt-3 pb-20 md:pb-32">
      <div className="w-full max-w-[1110px] px-6 lg:px-0 flex flex-col md:flex-row md:gap-6 lg:gap-8 items-center">
        {ShopProductData.map((product) => (
          <div
            key={product.id}
            className="bg-[#F1F1F1] h-[25vh] md:h-[17vh] lg:h-[30vh] w-[90%] md:w-1/3 flex flex-col items-center mb-10 md:mb-0 relative rounded-lg"
          >
          <Link
            href={product.link}
            className="flex flex-col items-center justify-center pb-5 w-full"
          >
            <div className="absolute top-5 transform -translate-y-1/2 z-50">
              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={20}
                className="md:w-[160px] lg:w-[180px]"
              />
            </div>
            <span className="font-bold text-[15px] md:text-[16px] tracking-wider mt-24 md:mt-28 lg:mt-32 mb-3 text-black">
              {product.name}
            </span>
            <span className="text-[12px] md:text-[13px] text-gray-600 flex flex-row tracking-[0.3em] hover:text-[#D87D4A] transition duration-300">
              {" "}
              SHOP
              <span className="text-[#D87D4A]">&gt;</span>
            </span>{" "}
            
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProduct;
