"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useCart } from "../../context/CartContext";
import BillingDetailsSection from "./BillingDetailsSection";
import ShippingInfoSection from "./ShippingInfoSection";
import PaymentDetailsSection from "./PaymentDetailsSection";
import OrderSummary from "./OrderSummary";
import OrderConfirmationModal from "./OrderConfirmationModal";
import { validateEmail, validatePhone, validateZipCode } from "../utils";
import type { CheckoutFormData, CartItem } from "../types";

interface CheckoutFormProps {
  cartItems: CartItem[];
  shipping: number;
  vatRate: number;
}

export default function CheckoutForm({
  cartItems,
  shipping,
  vatRate,
}: CheckoutFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clearCart } = useCart();
  const saveOrder = useMutation(api.tasks.saveOrder);
  const sendOrderConfirmationEmail = useAction(api.actions.sendOrderConfirmationEmail);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<CheckoutFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "e-Money",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  const paymentMethod = watch("paymentMethod");

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = Math.round(total * vatRate);
  const grandTotal = total + shipping + vat;

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const vat = Math.round(subtotal * vatRate);

      const orderId = await saveOrder({
        order: {
          customer: {
            name: data.name,
            email: data.email,
            phone: data.phone,
          },
          shipping: {
            address: data.address,
            zipCode: data.zipCode,
            city: data.city,
            country: data.country,
          },
          items: cartItems.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          totals: {
            subtotal,
            shipping,
            taxes: vat,
            grandTotal: subtotal + shipping + vat,
          },
        },
      });

      // For sending confirmation email
      try {
        await sendOrderConfirmationEmail({ orderId });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }

      setIsModalOpen(true);
    } catch (error) {
      console.error("Order submission failed:", error);
      alert("Order submission failed. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-12">
          <h1 className="checkout-heading mb-10">CHECKOUT</h1>

          <BillingDetailsSection
            register={register}
            errors={errors}
            validateEmail={validateEmail}
            validatePhone={validatePhone}
          />

          <ShippingInfoSection
            register={register}
            errors={errors}
            validateZipCode={validateZipCode}
          />

          <PaymentDetailsSection
            register={register}
            errors={errors}
            paymentMethod={paymentMethod}
          />
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1">
          <OrderSummary
            cartItems={cartItems}
            shipping={shipping}
            vatRate={vatRate}
            isFormValid={isValid}
          />
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cartItems={cartItems}
        grandTotal={grandTotal}
      />
    </form>
  );
}