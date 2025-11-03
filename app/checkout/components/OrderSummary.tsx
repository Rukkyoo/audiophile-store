"use client";

import Image from "next/image";
import { formatCurrency } from "../utils";
import type { CartItem } from "../types";

interface OrderSummaryProps {
  cartItems: CartItem[];
  shipping: number;
  vatRate: number;
  isFormValid: boolean;
}

export default function OrderSummary({
  cartItems,
  shipping,
  vatRate,
  isFormValid,
}: OrderSummaryProps) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = Math.round(total * vatRate);
  const grandTotal = total + shipping + vat;

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 h-fit">
      <h2 className="text-lg font-bold tracking-wider mb-8">SUMMARY</h2>

      {/* Cart Items */}
      <div className="space-y-6 mb-6">
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
                {formatCurrency(item.price)}
              </p>
            </div>
            <span className="text-gray-500 font-bold text-sm">
              x{item.quantity}
            </span>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 mb-8">
        <div className="flex justify-between items-center">
          <span className="summary-text">TOTAL</span>
          <span className="summary-price">{formatCurrency(total)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="summary-text">SHIPPING</span>
          <span className="summary-price">{formatCurrency(shipping)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="summary-text">VAT (INCLUDED)</span>
          <span className="summary-price">{formatCurrency(vat)}</span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="flex justify-between items-center mb-8">
        <span className="summary-text">GRAND TOTAL</span>
        <span className="grand-total-price">{formatCurrency(grandTotal)}</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-4 text-white font-bold text-sm tracking-wider transition-colors ${
          isFormValid
            ? 'bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        CONTINUE & PAY
      </button>
    </div>
  );
}