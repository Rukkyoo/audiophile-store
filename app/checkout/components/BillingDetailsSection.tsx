"use client";

import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CheckoutFormData } from "../types";

interface BillingDetailsSectionProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  validateEmail: (email: string) => boolean;
  validatePhone: (phone: string) => boolean;
}

export default function BillingDetailsSection({
  register,
  errors,
  validateEmail,
  validatePhone,
}: BillingDetailsSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="section-heading mb-4">BILLING DETAILS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            {errors.name && (
              <span className="text-xs font-medium text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <input
            type="text"
            id="name"
            placeholder="Alexei Ward"
            {...register("name", {
              required: "Required",
            })}
            className={`form-input w-full ${errors.name ? 'border-red-500' : ''}`}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            {errors.email && (
              <span className="text-xs font-medium text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <input
            type="email"
            id="email"
            placeholder="alexei@mail.com"
            {...register("email", {
              required: "Required",
              validate: (value) => validateEmail(value) || "Invalid email",
            })}
            className={`form-input w-full ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            {errors.phone && (
              <span className="text-xs font-medium text-red-500">
                {errors.phone.message}
              </span>
            )}
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="+1202-555-0136"
            {...register("phone", {
              required: "Required",
              validate: (value) => validatePhone(value) || "Invalid phone",
            })}
            className={`form-input w-full ${errors.phone ? 'border-red-500' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}