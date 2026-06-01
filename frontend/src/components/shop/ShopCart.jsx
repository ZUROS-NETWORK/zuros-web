import React, { useEffect } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import { CartPanel } from "./Cart/CartPanel";
import { LoginOverlay } from "./LoginOverlay/LoginOverlay";
import { CartButton } from "./CartButton/CartButton";

function CartWrapper() {
  const { toggleCart, cart, addToCart } = useCart();

  useEffect(() => {
    const handleAddToCart = (e) => {
      if (e.detail && e.detail.product) {
        addToCart(e.detail.product, e.detail.quantity || 1);
      }
    };

    const handleToggleCart = () => {
      toggleCart();
    };

    window.addEventListener("add-to-cart", handleAddToCart);
    window.addEventListener("toggle-cart", handleToggleCart);

    return () => {
      window.removeEventListener("add-to-cart", handleAddToCart);
      window.removeEventListener("toggle-cart", handleToggleCart);
    };
  }, [addToCart, toggleCart]);

  return (
    <>
      <LoginOverlay />
      <CartPanel />
      <CartButton onClick={toggleCart} itemCount={cart.length} />
    </>
  );
}

export default function ShopCart() {
  return (
    <CartProvider>
      <CheckoutProvider>
        <CartWrapper />
      </CheckoutProvider>
    </CartProvider>
  );
}
