import { Header } from "../components/Header";
import { YX1Earphones } from "../components/Products";
import ShopProduct from "../components/ShopProduct";
import AudioWriteup from "../components/AudioWriteup";
import Footer from "../components/Footer";
import ProductDetailLayout from "../components/ProductDetailLayout";

const page = () => {
  const product = YX1Earphones[0];

  const relatedProducts = [
    {
      name: "XX99 MARK I",
      image: "/headphones.webp",
      link: "/xx99-mark-1-headphones",
    },
    {
      name: "XX59",
      image: "/xx59.webp",
      link: "/xx59-headphones",
    },
    {
      name: "ZX9 SPEAKER",
      image: "/zx9.webp",
      link: "/zx9-speaker",
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
          backLink="/earphones"
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