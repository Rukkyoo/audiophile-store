import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";

interface ProductDetailLayoutProps {
  product: {
    id: string;
    name: string;
    type?: string;
    description: string;
    price: number;
    displayImage: string;
    features: string;
    boxItems: string[];
    images: string[];
  };
  backLink: string;
  relatedProducts: Array<{
    name: string;
    image: string;
    link: string;
  }>;
}

export default function ProductDetailLayout({
  product,
  backLink,
  relatedProducts,
}: ProductDetailLayoutProps) {
  return (
    <>
      {/* Go Back Link */}
      <div className="w-full max-w-[1110px] mx-auto px-6 lg:px-0">
        <p className="text-[12px] text-gray-500 tracking-[0.3em] mb-4 text-left pt-4 pb-6 hover:text-[#D87D4A] transition-colors">
          <Link href={backLink}>Go Back</Link>
        </p>
      </div>

      {/* Product Details Section */}
      <section className="w-full max-w-[1110px] mx-auto px-6 lg:px-0 mb-20 lg:mb-32">
        <div className="flex flex-col lg:flex-row lg:gap-32 items-center lg:items-center">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src={product.displayImage}
              width={540}
              height={560}
              alt={product.name}
              className="rounded-lg w-full max-w-[350px] lg:max-w-[540px] h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            {product.type && (
              <span className="text-[#D87D4A] tracking-[0.8em] text-sm mb-4">
                {product.type}
              </span>
            )}
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-black">
              {product.name}
            </h1>
            <p className="text-gray-500 opacity-75 mb-8 leading-relaxed">
              {product.description}
            </p>
            <h6 className="text-black font-bold text-lg mb-8">
              $ {product.price.toLocaleString()}
            </h6>
            <AddToCart
              productId={product.id}
              productName={product.name}
              price={product.price}
              image={product.displayImage}
            />
          </div>
        </div>
      </section>

      {/* Features and In The Box Section */}
      <section className="w-full max-w-[1110px] mx-auto px-6 lg:px-0 mb-20 lg:mb-32">
        <div className="flex flex-col lg:flex-row lg:gap-32">
          {/* Features */}
          <div className="w-full lg:w-[60%] mb-12 lg:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black">
              FEATURES
            </h2>
            <p className="text-gray-500 opacity-75 leading-relaxed whitespace-pre-line">
              {product.features}
            </p>
          </div>

          {/* In The Box */}
          <div className="w-full lg:w-[40%]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black">
              IN THE BOX
            </h2>
            <ul>
              {product.boxItems.map((item, index) => {
                const [quantity, ...rest] = item.split(" ");
                const description = rest.join(" ");
                return (
                  <li key={index} className="text-gray-500 opacity-75 mb-2 flex">
                    <span className="text-[#D87D4A] font-bold mr-5 min-w-[20px]">
                      {quantity}
                    </span>
                    {description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="w-full max-w-[1110px] mx-auto px-6 lg:px-0 mb-20 lg:mb-32">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          {/* Left column - 2 images stacked */}
          <div className="flex flex-col gap-4 lg:gap-8">
            {product.images.slice(0, 2).map((imgSrc, index) => (
              <Image
                key={index}
                src={imgSrc}
                width={445}
                height={280}
                alt={`${product.name}-${index + 1}`}
                className="rounded-lg w-full h-auto object-cover"
              />
            ))}
          </div>

          {/* Right column - 1 large image */}
          <div className="mt-4 lg:mt-0">
            {product.images[2] && (
              <Image
                src={product.images[2]}
                width={635}
                height={592}
                alt={`${product.name}-3`}
                className="rounded-lg w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="w-full max-w-[1110px] mx-auto px-6 lg:px-0 mb-20 lg:mb-32">
        <h2 className="text-2xl lg:text-3xl font-bold mb-10 lg:mb-16 text-center text-black">
          YOU MAY ALSO LIKE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {relatedProducts.map((relatedProduct, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#f1f1f1] rounded-lg w-full flex items-center justify-center mb-8 p-8">
                <Image
                  src={relatedProduct.image}
                  width={350}
                  height={318}
                  alt={relatedProduct.name}
                  className="rounded-lg w-full max-w-[200px] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-center text-black">
                {relatedProduct.name}
              </h3>
              <button className="px-8 text-sm py-4 bg-[#D87D4A] transition-all duration-300 text-white font-bold tracking-wider hover:bg-[#FBAF85]">
                <Link href={relatedProduct.link}>SEE PRODUCT</Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}