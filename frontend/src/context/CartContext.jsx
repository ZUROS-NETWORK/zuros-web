import { createContext, useContext, useState, useEffect } from "react";
import { createCart, deleteCartDb, getCart, updateCart } from "../services/api";
import { useProductsContext } from "./ProductsContext";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [cartId, setCartId] = useState(localStorage.getItem("cartId"));
  const { packages } = useProductsContext()

  async function fetchCart() {
    if (!cartId) return;
    setCartLoading(true)
    const cartData = await getCart(cartId).catch((error) => {
      console.error("Error fetching cart:", error);
      setCartLoading(false)
      localStorage.removeItem("cartId");
      setCartId(null);
    } );
    if (cartData){ 
      setCart(cartData);
      setCartLoading(false)
    }
  }

  useEffect(() => {
    fetchCart();
  }, [cartId]);

  const addToCart = async (id, quantity = 1) => {
    const product = packages.find((p) => p.id === id);
    if (!product) return;

    let updatedCart;
    
    if (!cartId) {
      setCartLoading(true)
      setCartOpen(true);
      const newCartId = await createCart([{ id, quantity }])

      localStorage.setItem("cartId", newCartId);
      setCartId(newCartId);
      updatedCart = [{ ...product, quantity }];
      setCartLoading(false)
    } else {
      const existingItem = cart.find((item) => item.id === id);
      if (existingItem) {
        updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        updatedCart = [...cart, { ...product, quantity }];
      }
       updateCart(cartId, updatedCart)
    }
    setCart(updatedCart);
    setCartOpen(true);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return removeFromCart(id);

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
    updateCart(cartId, updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    updateCart(cartId, updatedCart);
  };

  const deleteCart = async () => {
    localStorage.removeItem("cartId");
    setCart([]);
    setCartId(null);
    await deleteCartDb(cartId);
  };

  const cartTotal = cart.reduce((total, item) => total + item.total_price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        cartLoading,
        cartId,
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
