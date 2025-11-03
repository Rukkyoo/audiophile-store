import { Doc } from "./_generated/dataModel";

export function generateOrderConfirmationEmail(order: Doc<"orders">): string {
  const itemsHtml = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          <strong>${item.name}</strong>
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">
          ${item.quantity}x
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
          $${item.price.toFixed(2)}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
          $${(item.price * item.quantity).toFixed(2)}
        </td>
      </tr>
    `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - Audiophile</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: #fff; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .order-details { background: #fff; padding: 20px; margin: 20px 0; border-radius: 5px; }
        table { width: 100%; border-collapse: collapse; }
        .total { font-weight: bold; font-size: 18px; }
        .footer { background: #000; color: #fff; padding: 20px; text-align: center; }
        .cta-button {
          display: inline-block;
          background: #D87D4A;
          color: #fff;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 5px;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank you for your order, ${order.customer.name}!</h1>
          <p>Your order has been confirmed</p>
        </div>

        <div class="content">
          <div class="order-details">
            <h2>Order #${order._id.slice(-8).toUpperCase()}</h2>

            <h3>Items Ordered:</h3>
            <table>
              <thead>
                <tr style="border-bottom: 2px solid #333;">
                  <th style="text-align: left; padding: 10px;">Product</th>
                  <th style="text-align: center; padding: 10px;">Qty</th>
                  <th style="text-align: right; padding: 10px;">Price</th>
                  <th style="text-align: right; padding: 10px;">Total</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>

            <div style="margin-top: 20px; text-align: right;">
              <p>Subtotal: $${order.totals.subtotal.toFixed(2)}</p>
              <p>Shipping: $${order.totals.shipping.toFixed(2)}</p>
              <p>Tax: $${order.totals.taxes.toFixed(2)}</p>
              <p class="total">Grand Total: $${order.totals.grandTotal.toFixed(2)}</p>
            </div>
          </div>

          <div class="order-details">
            <h3>Shipping Address:</h3>
            <p>
              ${order.customer.name}<br>
              ${order.shipping.address}<br>
              ${order.shipping.city}, ${order.shipping.zipCode}<br>
              ${order.shipping.country}
            </p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="#" class="cta-button">View Your Order</a>
          </div>

          <p>If you have any questions, please contact our support team at support@audiophile.com</p>
        </div>

        <div class="footer">
          <p>&copy; 2025 Audiophile. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}