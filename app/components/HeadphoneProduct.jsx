import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShopProduct from "./ShopProduct.jsx";
import AudioWriteup from "./AudioWriteup.jsx";
import Footer from "./Footer.jsx";

const HeadphoneProductUnit = [
  {
    id: 1,
    image: "/xx99-headphones.jpg",
    type: "NEW PRODUCT",
    name: "XX99 MARK II HEADPHONES",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    link: "/xx99-headphones",
  },
  {
    id: 2,
    image: "/xx59-headphones.jpg",
    name: "XX59 HEADPHONES",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    link: "/xx59-headphones",
  },
  {
    id: 3,
    image: "/xx99-mark-1.jpg",
    name: "XX99 MARK I HEADPHONES",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    link: "/xx99-mark-1-headphones",
  },
];

const HeadphoneProduct = () => {
  return (
    <div className="text-black">
      {HeadphoneProductUnit.map((headphone) => (
        <div key={headphone.id} className="mb-10 px-5 flex flex-col items-center">
          <Image
            src={headphone.image}
            alt={headphone.name}
            width={600}
            height={20}
          />
          <h6 className="text-[#D87D4A] tracking-[0.8em] mt-5">{headphone.type}</h6>
          <h1 className="text-3xl font-bold px-4 mb-4 mt-6 text-center">{headphone.name}</h1>
          <p className="text-center text-gray-500 opacity-75 px-10 mb-5">{headphone.description}</p>
          <button className="px-6 text-sm py-3 bg-[#D87D4A] transition-all duration-300 text-white font-bold rounded hover:bg-[#FBAF85]">
            <Link href={headphone.link}>SEE PRODUCT</Link>
          </button>
        </div>
      ))}

      <ShopProduct />
      <AudioWriteup />
      <Footer />
    </div>
  );
};

export default HeadphoneProduct;
