import React from "react";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import Products from "./index";

export default function Shop() {
  return (
    <ProductsProvider>
      <CartProvider>
        <CheckoutProvider>
          <Products />
        </CheckoutProvider>
      </CartProvider>
    </ProductsProvider>
  );
}
