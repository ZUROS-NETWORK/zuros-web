import { createContext, useContext, useState, useEffect } from "react";
import { createCart, deleteCartDb, getCart, updateCart } from "../services/api";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartId, setCartId] = useState(localStorage.getItem("cartId"));
  async function fetchCart() {
    const cartData = await getCart(cartId);
    setCart(cartData);
  }
  useEffect(() => {

    if (!cartId) return;
    fetchCart()
  }, [cartId]);


  const addToCart = async (id, quantity) => {
    if (!cartId) {
      const getCartId = await createCart([{ id, quantity: 1 }])
      setCartOpen(true)
      localStorage.setItem("cartId", getCartId);
      setCartId(getCartId)
      return getCartId
    }
    updateCart(cartId, [...cart, { id, quantity }]);
    setCartOpen(true)
    fetchCart()
  };
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    const product = cart.find((item) => item.id === id);

    product.quantity = newQuantity;
    updateCart(cartId, cart);
    fetchCart()
  };
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(cartId, updatedCart);
    fetchCart()
  };
  const deleteCart = async () => {
    localStorage.removeItem("cartId");
    await deleteCartDb()
  };
  const cartTotal = cart.reduce((total, item) => total + (item.total_price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{ cart, cartOpen, cartId, toggleCart: () => setCartOpen((prev) => !prev), addToCart, updateQuantity, removeFromCart, deleteCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
