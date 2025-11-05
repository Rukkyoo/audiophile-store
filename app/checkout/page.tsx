"use client";

import Link from "next/link";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import CheckoutForm from "./components/CheckoutForm";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  // Configuration
  const shipping = 50;
  const vatRate = 0.2;

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <header className="w-full flex flex-row items-center justify-center bg-black">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
          {/* Go Back Link */}
          <Link
            href="/"
            className="inline-block text-sm text-gray-500 hover:text-[#D87D4A] mb-6 transition-colors"
          >
            Go Back
          </Link>

          {/* Checkout Form */}
          {cartItems.length > 0 ? (
            <CheckoutForm
              cartItems={cartItems}
              shipping={shipping}
              vatRate={vatRate}
            />
          ) : (
            <div className="bg-white rounded-lg p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">
                Add some items to your cart before checking out.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-8 tracking-wider transition-colors"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}