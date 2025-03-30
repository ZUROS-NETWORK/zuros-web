import { createContext, useContext, useState } from "react";
import { LoginForm } from "../components/shop/Login/Login";
import { getCheckoutId } from "../services/api";
import { useCart } from "./CartContext";
import Tebex from "@tebexio/tebex.js";

const CheckoutContext = createContext();
export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [mcVersion, setMcVersion] = useState('java');
  const [OverlayOpen, setOverlayOpen] = useState(false);
  const [overlayContent, setOverlayContent] = useState(<LoginForm />);
  const { cartId, deleteCart } = useCart()
  const proceedToCheckout = async () => {
    setOverlayContent(null)
    const checkoutId = await getCheckoutId({ id: cartId, username })
      Tebex.checkout.init({
                ident: checkoutId+'/payment',
                locale: 'es_ES',
                colors: [
        { name: "primary", color: "#ec4899" },
        { name: "secondary", color: "#ec4899" }
    ]
            });

            Tebex.checkout.launch();
        Tebex.checkout.on("open", cancelCheckout)
        Tebex.checkout.on("close", cancelCheckout)
        Tebex.checkout.on("payment:complete",completeCheckout)
  };
 const cancelCheckout = () => {
    setOverlayOpen(false)
    setOverlayContent(<LoginForm />)
  };
 const completeCheckout = () => {
    setOverlayOpen(false)
    deleteCart()
    setOverlayContent(<LoginForm />)
  };

  return (
    <CheckoutContext.Provider
      value={{ username, setUsername, OverlayOpen, setMcVersion, mcVersion, setOverlayOpen, overlayContent, setOverlayContent, proceedToCheckout, cancelCheckout }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
