"use client";

import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CheckoutFormData } from "../types";

interface ShippingInfoSectionProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  validateZipCode: (zipCode: string) => boolean;
}

export default function ShippingInfoSection({
  register,
  errors,
  validateZipCode,
}: ShippingInfoSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="section-heading mb-4">SHIPPING INFO</h3>
      <div className="grid grid-cols-1 gap-6">
        {/* Address */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="address" className="form-label">
              Your Address
            </label>
            {errors.address && (
              <span className="text-xs font-medium text-red-500">
                {errors.address.message}
              </span>
            )}
          </div>
          <input
            type="text"
            id="address"
            placeholder="1137 Williams Avenue"
            {...register("address", {
              required: "Required",
            })}
            className={`form-input w-full ${errors.address ? 'border-red-500' : ''}`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ZIP Code */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="zipCode" className="form-label">
                ZIP Code
              </label>
              {errors.zipCode && (
                <span className="text-xs font-medium text-red-500">
                  {errors.zipCode.message}
                </span>
              )}
            </div>
            <input
              type="text"
              id="zipCode"
              placeholder="10001"
              {...register("zipCode", {
                required: "Required",
                validate: (value) => validateZipCode(value) || "Invalid ZIP",
              })}
              className={`form-input w-full ${errors.zipCode ? 'border-red-500' : ''}`}
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="city" className="form-label">
                City
              </label>
              {errors.city && (
                <span className="text-xs font-medium text-red-500">
                  {errors.city.message}
                </span>
              )}
            </div>
            <input
              type="text"
              id="city"
              placeholder="New York"
              {...register("city", {
                required: "Required",
              })}
              className={`form-input w-full ${errors.city ? 'border-red-500' : ''}`}
            />
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            {errors.country && (
              <span className="text-xs font-medium text-red-500">
                {errors.country.message}
              </span>
            )}
          </div>
          <input
            type="text"
            id="country"
            placeholder="United States"
            {...register("country", {
              required: "Required",
            })}
            className={`form-input w-full ${errors.country ? 'border-red-500' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}