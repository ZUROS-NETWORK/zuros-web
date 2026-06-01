import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("zuros_cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (e) {
      console.error("Error loading cart from localStorage:", e);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  const saveCartToStorage = (updatedCart) => {
    try {
      localStorage.setItem("zuros_cart", JSON.stringify(updatedCart));
    } catch (e) {
      console.error("Error saving cart to localStorage:", e);
    }
  };

  const addToCart = async (productOrId, quantity = 1) => {
    const product = typeof productOrId === "object" ? productOrId : null;
    const id = product ? product.id : productOrId;
    if (!product) return;

    let updatedCart;
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }

    setCart(updatedCart);
    saveCartToStorage(updatedCart);
    setCartOpen(true);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return removeFromCart(id);

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
    saveCartToStorage(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    saveCartToStorage(updatedCart);
  };

  const deleteCart = async () => {
    setCart([]);
    try {
      localStorage.removeItem("zuros_cart");
    } catch (e) {
      console.error("Error clearing cart from localStorage:", e);
    }
  };

  const cartTotal = cart.reduce((total, item) => total + item.total_price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        cartLoading,
        toggleCart: () => setCartOpen((prev) => !prev),
        addToCart,
        updateQuantity,
        removeFromCart,
        deleteCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
