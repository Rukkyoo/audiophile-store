"use client";

import { Header } from "../components/Header";
import EarphoneProduct from "../components/EarphoneProduct";

export default function EarphonesPage() {
  return (
        <div className="flex flex-col items-center min-h-screen bg-[#141414]">
          <header className="w-full flex flex-row items-center justify-center">
            <Header />
          </header>
          <main className="text-white bg-white h-screen w-full">
            <div className="bg-[#141414]">
              <h1 className="text-4xl font-bold mb-4 text-center py-8">
                EARPHONES
              </h1>
            </div>
            <section>
              <EarphoneProduct />
            </section>
          </main>
        </div>
  );
}