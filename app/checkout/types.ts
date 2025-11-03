// Props types (data passed to components)
export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: "e-Money" | "Cash on Delivery";
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CheckoutPageProps {
  cartItems: CartItem[];
  initialFormData?: Partial<CheckoutFormData>;
  shipping: number;
  vatRate: number;
}

// Store types (global state data)
export interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

// Payment method options
export enum PaymentMethod {
  EMoney = "e-Money",
  CashOnDelivery = "Cash on Delivery"
}