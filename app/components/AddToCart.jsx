"use client";

import { useForm } from "react-hook-form";
import { Minus, Plus } from "lucide-react";

const AddToCart = ({ productId, productName, price, maxQuantity = 99 }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      quantity: 1,
    },
  });

  const quantity = watch("quantity");

  const incrementQuantity = () => {
    const currentQty = parseInt(quantity) || 1;
    if (currentQty < maxQuantity) {
      setValue("quantity", currentQty + 1);
    }
  };

  const decrementQuantity = () => {
    const currentQty = parseInt(quantity) || 1;
    if (currentQty > 1) {
      setValue("quantity", currentQty - 1);
    }
  };

  const onSubmit = async (data) => {
    try {
      // TODO: Integrate with Convex backend to add item to cart
      
      console.log("Adding to cart:", {
        productId,
        productName,
        quantity: data.quantity,
        price,
        total: price * data.quantity,
      });

      alert(`Added ${data.quantity} ${productName} to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div className="flex gap-4 items-start">
        {/* Quantity Selector */}
        <div className="bg-gray-100 flex items-center p-1">
          <button
            type="button"
            onClick={decrementQuantity}
            className="px-4 py-3 text-slate-500 hover:text-orange-500 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>

          <input
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 1, message: "Minimum quantity is 1" },
              max: {
                value: maxQuantity,
                message: `Maximum quantity is ${maxQuantity}`,
              },
              valueAsNumber: true,
            })}
            className="w-12 text-center bg-transparent text-black font-bold outline-none"
            aria-label="Quantity"
          />

          <button
            type="button"
            onClick={incrementQuantity}
            className="px-4 py-3 text-slate-500 hover:text-orange-500 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-3 font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Adding..." : "Add to Cart"}
        </button>
      </div>

      {/* Error Message */}
      {errors.quantity && (
        <p className="text-red-500 text-sm mt-2">{errors.quantity.message}</p>
      )}
    </form>
  );
};

export default AddToCart;