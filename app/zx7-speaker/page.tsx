import React from "react";
import Link from "next/link.js";
import Image from "next/image.js";
import { Header } from "../components/Header.jsx";
import AddToCart from "../components/AddToCart.jsx";
import { ZX7Speaker } from "../components/Products.js";
import ShopProduct from "../components/ShopProduct.jsx";
import AudioWriteup from "../components/AudioWriteup.jsx";
import Footer from "../components/Footer.jsx";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#141414]">
      <header className="w-full flex flex-row items-center justify-center">
        <Header />
      </header>
      <main className="text-white bg-white h-screen w-full">
        <div className="">
          <p className="text-[12px] pl-8 text-gray-500 tracking-[0.3em] mb-4 text-left pt-4 pb-6">
            <Link href="/headphones">Go Back</Link>
          </p>
        </div>
        <section className="flex flex-col items-center">
          {ZX7Speaker.map((product) => (
            <div className="flex flex-col items-center" key={product.id}>
              <Image
                src={product.displayImage}
                width={350}
                height={100}
                alt="xx99-mark-2-headphones"
                className="rounded-lg"
              />
              {/* <span className="text-[#D87D4A] tracking-[0.8em] mt-5 text-left w-full pl-8">
                {product.type}
              </span> */}
              <h1 className="text-3xl font-bold px-6 mb-4 text-left mt-6 text-black pl-8">
                {product.name}
              </h1>
              <p className="text-left text-gray-500 opacity-75 px-8 mb-5">
                {product.description}
              </p>
              <h6 className="text-black text-left w-full pl-8 font-bold">
                $ {product.price}
              </h6>
              <AddToCart
                productId={product.id}
                productName={product.name}
                price={product.price}
              />
              <h2 className="text-2xl font-bold px-6 mb-4 text-left w-full mt-6 text-black pl-8">
                FEATURES
              </h2>
              <p className="text-left w-full text-gray-500 opacity-75 px-8 mb-5">
                {product.features}
              </p>
              <h2 className="text-2xl font-bold px-6 mb-4 text-left w-full mt-6 text-black pl-8">
                IN THE BOX
              </h2>
              <div className="w-full px-6">
                <ul>
                  {product.boxItems.map((item, index) => {
                    const [quantity, ...rest] = item.split(" ");
                    const description = rest.join(" ");
                    return (
                      <li
                        key={index}
                        className="text-gray-500 opacity-75 mb-2 flex"
                      >
                        <span className="text-[#D87D4A] font-bold mr-5 ml-2">
                          {quantity}
                        </span>
                        {description}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full flex flex-col items-center mt-15">
                {product.images.map((imgSrc, index) => (
                  <Image
                    key={index}
                    src={imgSrc}
                    width={350}
                    height={100}
                    alt={`xx99-mark-2-headphone-${index}`}
                    className="rounded-lg m-4"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* You may also like */}
        <section>
          <h2 className="text-2xl mt-20 font-bold px-6 mb-4 text-center w-full text-black pl-8">
            YOU MAY ALSO LIKE
          </h2>

          {/* ZX9 */}
          <div className="flex flex-col items-center bg-[#f1f1f1] mx-8 mt-10">
            <Image
              src={"/zx9.webp"}
              width={350}
              height={100}
              alt="zx9-speaker"
              className="rounded-lg m-4 bg-[#f1f1f1]"
            />
            <span className="bg-white flex flex-col items-center w-[90vw]">
              <h2 className="text-2xl   font-bold px-6 mb-4 text-center mt-6 text-black pl-8">
                ZX9 SPEAKER
              </h2>
              <button className="px-6 text-sm py-3 bg-[#D87D4A] transition-all duration-300 text-white font-bold rounded hover:bg-[#FBAF85]">
                <Link href="/zx9-speaker">SEE PRODUCT</Link>
              </button>
            </span>
          </div>

          {/* XX99 MARK II */}
          <div className="flex flex-col items-center mb-10 bg-[#f1f1f1] mx-8 mt-10">
            <Image
              src={"/xx99.webp"}
              width={350}
              height={100}
              alt="xx99-headphones"
              className="rounded-lg m-4 bg-[#f1f1f1]"
            />
            <span className="bg-white flex flex-col items-center w-[90vw]">
              <h2 className="text-2xl font-bold px-6 mb-4 text-center mt-6 text-black pl-8">
                XX99 MARK II
              </h2>
              <button className="px-6 text-sm py-3 bg-[#D87D4A] transition-all duration-300 text-white font-bold rounded hover:bg-[#FBAF85]">
                <Link href="/xx99-headphones">SEE PRODUCT</Link>
              </button>
            </span>
          </div>

          {/* XX59 */}
          <div className="flex flex-col items-center bg-[#f1f1f1] mx-8 mt-10">
            <Image
              src={"/xx59.webp"}
              width={350}
              height={100}
              alt="xx59-headphones"
              className="rounded-lg m-4 bg-[#f1f1f1]"
            />
            <span className="bg-white flex flex-col items-center w-[90vw]">
              <h2 className="text-2xl   font-bold px-6 mb-4 text-center mt-6 text-black pl-8">
                XX59
              </h2>
              <button className="px-6 text-sm py-3 bg-[#D87D4A] transition-all duration-300 text-white font-bold rounded hover:bg-[#FBAF85]">
                <Link href="/xx59-headphones">SEE PRODUCT</Link>
              </button>
            </span>
          </div>

          
        </section>

        {/* Shop Products */}
        <section>
          <ShopProduct />
        </section>

        {/* Audio writeup */}
        <section>
          <AudioWriteup />
        </section>

        {/* Footer */}
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default page;
