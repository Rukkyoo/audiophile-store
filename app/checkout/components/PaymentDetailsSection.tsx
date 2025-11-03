"use client";

import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CheckoutFormData } from "../types";

interface PaymentDetailsSectionProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  paymentMethod: "e-Money" | "Cash on Delivery";
}

export default function PaymentDetailsSection({
  register,
  errors,
  paymentMethod,
}: PaymentDetailsSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="section-heading mb-4">PAYMENT DETAILS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="form-label">Payment Method</label>
        </div>
        <div className="flex flex-col gap-4">
          {/* e-Money Radio */}
          <label
            className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
              paymentMethod === "e-Money"
                ? 'border-[#D87D4A] bg-white'
                : 'border-[#CFCFCF] bg-white hover:border-[#D87D4A]'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                value="e-Money"
                {...register("paymentMethod")}
                className="appearance-none w-5 h-5 border-2 border-[#CFCFCF] rounded-full checked:border-[#D87D4A] cursor-pointer"
              />
              {paymentMethod === "e-Money" && (
                <div className="absolute w-2.5 h-2.5 bg-[#D87D4A] rounded-full pointer-events-none" />
              )}
            </div>
            <span className="text-sm font-bold">e-Money</span>
          </label>

          {/* Cash on Delivery Radio */}
          <label
            className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
              paymentMethod === "Cash on Delivery"
                ? 'border-[#D87D4A] bg-white'
                : 'border-[#CFCFCF] bg-white hover:border-[#D87D4A]'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                value="Cash on Delivery"
                {...register("paymentMethod")}
                className="appearance-none w-5 h-5 border-2 border-[#CFCFCF] rounded-full checked:border-[#D87D4A] cursor-pointer"
              />
              {paymentMethod === "Cash on Delivery" && (
                <div className="absolute w-2.5 h-2.5 bg-[#D87D4A] rounded-full pointer-events-none" />
              )}
            </div>
            <span className="text-sm font-bold">Cash on Delivery</span>
          </label>
        </div>
      </div>

      {paymentMethod === "e-Money" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* e-Money Number */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="eMoneyNumber" className="form-label">
                e-Money Number
              </label>
              {errors.eMoneyNumber && (
                <span className="text-xs font-medium text-red-500">
                  {errors.eMoneyNumber.message}
                </span>
              )}
            </div>
            <input
              type="text"
              id="eMoneyNumber"
              placeholder="238521993"
              {...register("eMoneyNumber", {
                required: paymentMethod === "e-Money" ? "Required" : false,
              })}
              className={`form-input w-full ${errors.eMoneyNumber ? 'border-red-500' : ''}`}
            />
          </div>

          {/* e-Money PIN */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="eMoneyPin" className="form-label">
                e-Money PIN
              </label>
              {errors.eMoneyPin && (
                <span className="text-xs font-medium text-red-500">
                  {errors.eMoneyPin.message}
                </span>
              )}
            </div>
            <input
              type="password"
              id="eMoneyPin"
              placeholder="6891"
              {...register("eMoneyPin", {
                required: paymentMethod === "e-Money" ? "Required" : false,
              })}
              className={`form-input w-full ${errors.eMoneyPin ? 'border-red-500' : ''}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}