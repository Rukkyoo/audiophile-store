import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShopProduct from "./ShopProduct";
import AudioWriteup from "./AudioWriteup";
import Footer from "./Footer";

const EarphoneProductUnit = [
  {
    id: 1,
    image: "/image-product-yx1-earphones.jpg",
    type: "NEW PRODUCT",
    name: "YX1 EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    link: "/yx1-earphones",
  },
];

const EarphoneProduct = () => {
  return (
    <div className="text-black">
      {EarphoneProductUnit.map((earphone) => (
        <div key={earphone.id} className="mb-10 px-5 flex flex-col items-center">
          <Image
            src={earphone.image}
            alt={earphone.name}
            width={600}
            height={20}
          />
          <h6 className="text-[#D87D4A] tracking-[0.8em] mt-5">{earphone.type}</h6>
          <h1 className="text-3xl font-bold px-4 mb-4 mt-6 text-center">{earphone.name}</h1>
          <p className="text-center text-gray-500 opacity-75 px-10 mb-5">{earphone.description}</p>
          <button className="px-6 text-sm py-3 bg-[#D87D4A] transition-all duration-300 text-white font-bold rounded hover:bg-[#FBAF85]">
            <Link href={earphone.link}>SEE PRODUCT</Link>
          </button>
        </div>
      ))}

      <ShopProduct />
      <AudioWriteup />
      <Footer />
    </div>
  );
};

export default EarphoneProduct;
