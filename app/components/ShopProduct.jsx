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
    <div className="bg-white w-full flex flex-col items-center pt-20">
      {ShopProductData.map((product) => (
        <div
          key={product.id}
          className="bg-[#F1F1F1] h-[25vh] z-0 w-[90%] flex flex-col items-center mb-20 relative"
        >
          <Link
            href={product.link}
            className="flex flex-col items-center justify-center pb-5"
          >
            <div className="absolute top-5 transform -translate-y-1/2 z-50">
              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={20}
              />
            </div>
            <span className="font-bold text-[15px] tracking-wider mt-24 mb-3 text-black">
              {product.name}
            </span>
            <span className="text-[12px] text-gray-600 flex flex-row tracking-[0.3em] hover:text-[#D87D4A] transition duration-300">
              {" "}
              SHOP
              <span className="text-[#D87D4A]">&gt;</span>
            </span>{" "}
            
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopProduct;
