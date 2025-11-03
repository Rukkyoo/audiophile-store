"use client";

import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "../utils";
import type { CartItem } from "../types";
import { useCart } from "../../context/CartContext";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  grandTotal: number;
}

export default function OrderConfirmationModal({
  isOpen,
  onClose,
  cartItems,
  grandTotal,
}: OrderConfirmationModalProps) {
  const { clearCart } = useCart();

  if (!isOpen) return null;

  const firstItem = cartItems[0];
  const otherItemsCount = cartItems.length - 1;

  const handleBackToHome = () => {
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[540px] bg-white rounded-lg shadow-xl z-50 p-8 md:p-12">
        {/* Success Icon */}
        <div className="mb-6">
          <Image
            src="/icon-order-confirmation.svg"
            alt="Order confirmed"
            width={64}
            height={64}
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-wider mb-4 uppercase">
          Thank you
          <br />
          for your order
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary Box */}
        <div className="mb-8 rounded-lg overflow-hidden">
          {/* Items Section */}
          <div className="bg-[#F1F1F1] p-6">
            {firstItem && (
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={firstItem.image}
                  alt={firstItem.name}
                  width={50}
                  height={50}
                  className="rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-sm">{firstItem.name}</h3>
                  <p className="text-gray-500 text-sm font-bold">
                    {formatCurrency(firstItem.price)}
                  </p>
                </div>
                <span className="text-gray-500 font-bold text-sm">
                  x{firstItem.quantity}
                </span>
              </div>
            )}

            {otherItemsCount > 0 && (
              <>
                <div className="border-t border-gray-300 my-3" />
                <p className="text-xs text-gray-500 font-bold text-center">
                  and {otherItemsCount} other item{otherItemsCount > 1 ? 's' : ''}
                </p>
              </>
            )}
          </div>

          {/* Grand Total Section */}
          <div className="bg-black p-6">
            <p className="text-gray-400 text-sm font-medium mb-2 uppercase">
              Grand Total
            </p>
            <p className="text-white text-lg font-bold">
              {formatCurrency(grandTotal)}
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="block w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 text-center tracking-wider transition-colors uppercase text-sm"
          onClick={handleBackToHome}
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}