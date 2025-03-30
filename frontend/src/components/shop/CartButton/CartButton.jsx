import { ShoppingCart } from "lucide-react";
import "./FloatingCartButton.css"; 

export function FloatingCartButton({ itemCount, onClick }) {
  return (
    <button onClick={onClick} className="floating-cart-button" aria-label="Abrir carrito">
      <ShoppingCart className="cart-icon" />
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </button>
  );
}
