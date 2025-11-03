import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";

export const getOrders = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("orders").collect();
  },
});

export const saveOrder = mutation({
  args: {
    order: v.object({
      customer: v.object({
        name: v.string(),
        email: v.string(),
        phone: v.string(),
      }),
      shipping: v.object({
        address: v.string(),
        zipCode: v.string(),
        city: v.string(),
        country: v.string(),
      }),
      items: v.array(
        v.object({
          id: v.string(),
          name: v.string(),
          price: v.number(),
          quantity: v.number(),
        })
      ),
      totals: v.object({
        subtotal: v.number(),
        shipping: v.number(),
        taxes: v.number(),
        grandTotal: v.number(),
      }),
    }),
  },
  handler: async (ctx, { order }) => {
    const orderId = await ctx.db.insert("orders", {
      ...order,
      status: "confirmed",
      createdAt: Date.now(),
    });


    return orderId;
  },
});

export const getOrderById = query({
  args: { id: v.id("orders") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});
