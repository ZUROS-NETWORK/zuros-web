import { ShoppingCart } from "lucide-react";
import "./CartButton.css"; 

export function CartButton({ itemCount, onClick }) {
  return (
    <div className="cart-fixed-bar">
      <button onClick={onClick} className="cart-bar-button" aria-label="Abrir carrito">
        <ShoppingCart className="cart-icon" />
        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
      </button>
    </div>
  );
}
