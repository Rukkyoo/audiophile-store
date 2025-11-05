#  Audiophile E-commerce Store

A modern, responsive e-commerce website for high-end audio equipment built with Next.js, Convex, and Tailwind CSS.

##  Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Product Catalog**: Browse headphones, speakers, and earphones
- **Shopping Cart**: Add/remove items with persistent local storage
- **Checkout System**: Complete order processing with form validation
- **Order Management**: Orders saved to Convex database with unique IDs
- **Email Confirmations**: Automated order confirmation emails (configurable)
- **Real-time Updates**: Live cart updates and order processing

##  Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Backend**: Convex (Database & Serverless Functions)
- **Email**: Nodemailer (Transactional emails)
- **Forms**: React Hook Form with validation
- **State Management**: React Context API

##  Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/Rukkyoo/audiophile-store>
   cd audiophile-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```

4. **Configure environment variables** (see Email Configuration below)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

##  Email Configuration

To enable order confirmation emails:

1. **Open Convex Dashboard**
   ```bash
   npx convex dashboard
   ```

2. **Add Environment Variables** in Settings → Environment Variables:
   ```
   EMAIL_USER = your-email@gmail.com
   EMAIL_PASS = your-app-password
   ```

### Gmail Setup:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Use the 16-character password as `EMAIL_PASS`

### Other Email Providers:
- **Outlook**: `EMAIL_USER = your-email@outlook.com`
- **SendGrid**: `EMAIL_USER = apikey`, `EMAIL_PASS = your-api-key`
- **Mailgun**: Configure SMTP credentials accordingly

## 🛒 How It Works

### Shopping Flow:
1. **Browse Products**: View product catalog with detailed descriptions
2. **Add to Cart**: Items persist in localStorage
3. **Checkout**: Complete form with customer and shipping details
4. **Order Processing**:
   - Order saved to Convex database
   - Confirmation email sent (if configured)
   - Order confirmation modal displays
   - Cart clears when user clicks "Back to Home"

### Order Data Structure:
```typescript
{
  customer: { name, email, phone },
  shipping: { address, zipCode, city, country },
  items: [{ id, name, price, quantity }],
  totals: { subtotal, shipping, taxes, grandTotal },
  status: "confirmed",
  createdAt: timestamp
}
```

##  Project Structure

```
audiophile-store/
├── app/                     # Next.js App Router
│   ├── checkout/           # Checkout flow
│   ├── components/         # Reusable UI components
│   ├── context/           # React Context providers
│   └── layout.tsx         # Root layout
├── convex/                 # Convex backend
│   ├── actions.ts         # Email sending actions
│   ├── schema.ts          # Database schema
│   ├── tasks.ts           # Database mutations/queries
│   └── emailTemplate.ts   # Email templates
├── public/                 # Static assets
└── README.md
```

##  Key Components

- **CartContext**: Manages shopping cart state and persistence
- **CheckoutForm**: Multi-step form with validation
- **OrderConfirmationModal**: Success modal with order summary
- **Product Components**: Reusable product display components

##  Development

### Available Scripts:
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Convex Commands:
```bash
npx convex dev           # Start Convex development
npx convex dashboard     # Open Convex dashboard
npx convex deploy       # Deploy to production
```

##  Deployment

### Deploy to Vercel:
1. **Connect GitHub repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Convex Deployment:
```bash
npx convex deploy
```

##  Features in Detail

### Order Management:
-  Orders stored with unique IDs
-  Customer and shipping information
-  Itemized order details with quantities
-  Calculated totals (subtotal, shipping, tax, grand total)
-  Order status tracking

### Email System:
-  Professional HTML email templates
-  Responsive design for all devices
-  Order summary and shipping details
-  Configurable SMTP settings
-  Error handling (emails don't block orders)

### User Experience:
-  Responsive design for mobile/desktop
-  Loading states and error handling
-  Form validation with helpful messages
-  Persistent cart across sessions
-  Order confirmation with clear next steps

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
