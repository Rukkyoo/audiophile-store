"use client";
import { Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Image from "next/image";

const CartModal = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-opacity-40 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Modal */}
      <div className="fixed top-24 md:top-28 right-4 md:right-8 lg:right-20 w-[90%] md:w-[400px] lg:w-[450px] bg-white rounded-lg shadow-xl z-50 p-6 md:p-8 max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold tracking-wider">
            CART ({cartItems.length})
          </h2>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm text-gray-500 hover:text-[#D87D4A] underline transition-colors"
            >
              Remove all
            </button>
          )}
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-6 overflow-y-auto flex-1 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-sm font-bold">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-100 px-4 py-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-[#D87D4A] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-bold text-sm w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-[#D87D4A] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 font-medium">TOTAL</span>
                <span className="font-bold text-lg">
                  $ {getTotalPrice().toLocaleString()}
                </span>
              </div>
              <Link
                href="/checkout"
                className="w-full inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 text-center tracking-wider transition-colors rounded"
              >
                CHECKOUT
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
