import { X, Plus, Minus } from "lucide-react";
export function CartItem({id, name, price, quantity, image, removeFromCartFn, updateQuantityFn }) {
    return          <div className="cart-item">
                <div className="cart-item-info">
                  <img src={image} alt={name} className="cart-item-image" />

                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      <p className="cart-item-nme">{name}</p>
                      <button
                        className="cart-remove-btn"
                        onClick={() => removeFromCartFn(id)}
                      >
                        <X className="cart-icon-small" />
                      </button>
                    </div>
                    <div className="cart-item-actions">
                      <p className="cart-item-price">${price.toFixed(2)} USD</p>
                      <div className="cart-quantity-controls">
                        <button
                          className="cart-quantity-btn"
                          onClick={() => updateQuantityFn(id, quantity - 1)}
                        >
                          <Minus className="cart-icon-small" />
                        </button>
                        <span className="cart-quantity">{quantity}</span>
                        <button
                          className="cart-quantity-btn"
                          onClick={() => updateQuantityFn(id, quantity + 1)}
                        >
                          <Plus className="cart-icon-small" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
   
     
}
