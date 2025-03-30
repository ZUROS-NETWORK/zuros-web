import { X, ShoppingCart, ChevronRight } from "lucide-react";

import { useCart } from '../../../context/CartContext';
import './Cart.css'
import { CartItem } from "./CartItem";
import { useCheckout } from "../../../context/CheckoutContext";
export function CartPanel() {
  const { cartOpen, toggleCart, cart, updateQuantity, removeFromCart, cartTotal, } = useCart();
  const {setOverlayOpen} = useCheckout()

  if (!cartOpen) return null;


  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header">
          <h2 className="cart-title">Tu Carrito</h2>
          <button className="cart-close-btn" onClick={toggleCart}>
            <X className="cart-icon" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <ShoppingCart className="cart-icon-large" />
            <p className="cart-empty-message">Tu carrito está vacío</p>
            <button className="cart-continue-shopping-btn" onClick={toggleCart}>
              Continuar Comprando
            </button>
          </div>
        ) : (
          <><div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.total_price}
                quantity={item.quantity}
                image={item.image}
                removeFromCartFn={removeFromCart}
                updateQuantityFn={updateQuantity} />
            ))}
          </div><div className="cart-total">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span className="cart-subtotal-amount">${cartTotal.toFixed(2)} USD</span>
              </div>
              <div className="cart-total-line"></div>
              <div className="cart-total-amount">
                <span>Total</span>
                <span className="cart-total-amount-value">${cartTotal.toFixed(2)} USD</span>
              </div>
              <button className="cart-checkout-btn" onClick={()=> {setOverlayOpen(true); toggleCart()}}>
                Finalizar Compra <ChevronRight className="cart-icon-small" />
              </button>
            </div></>
        )}
      </div>
    </div>
  );
}
