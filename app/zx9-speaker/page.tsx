import { Header } from "../components/Header";
import { ZX9Speaker } from "../components/Products";
import ShopProduct from "../components/ShopProduct";
import AudioWriteup from "../components/AudioWriteup";
import Footer from "../components/Footer";
import ProductDetailLayout from "../components/ProductDetailLayout";

const page = () => {
  const product = ZX9Speaker[0];

  const relatedProducts = [
    {
      name: "ZX7 SPEAKER",
      image: "/zx7.webp",
      link: "/zx7-speaker",
    },
    {
      name: "XX99 MARK II",
      image: "/xx99.webp",
      link: "/xx99-headphones",
    },
    {
      name: "XX59",
      image: "/xx59.webp",
      link: "/xx59-headphones",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#141414]">
      <header className="w-full flex flex-row items-center justify-center">
        <Header />
      </header>
      <main className="text-white bg-white w-full">
        <ProductDetailLayout
          product={product}
          backLink="/speakers"
          relatedProducts={relatedProducts}
        />

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