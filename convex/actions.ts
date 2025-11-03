"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import nodemailer from "nodemailer";
import { generateOrderConfirmationEmail } from "./emailTemplate";

export const sendOrderConfirmationEmail = action({
  args: { orderId: v.id("orders") },
  handler: async (ctx, { orderId }) => {
    const order = await ctx.runQuery(api.tasks.getOrderById, { id: orderId });
    if (!order) {
      throw new Error("Order not found");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"), 
      secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const htmlContent = generateOrderConfirmationEmail(order);

    try {
      await transporter.sendMail({
        from: `"Audiophile Store" <${process.env.EMAIL_USER}>`,
        to: order.customer.email,
        subject: `Order Confirmation - #${orderId.slice(-8).toUpperCase()}`,
        html: htmlContent,
      });

      console.log(`Order confirmation email sent to ${order.customer.email}`);
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Failed to send confirmation email");
    }
  },
});