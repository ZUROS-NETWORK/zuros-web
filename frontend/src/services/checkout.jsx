import { checkoutBasket } from "./tebex.jsx";
import { getCart } from "./api";
const tebexToken = import.meta.env.VITE_TEBEX_PUBLIC_TOKEN
export async function checkoutService({ cartId, username }) {
  const cart = await getCart(cartId);
  const baseUrl = window.location.origin;
  const url = {
    completeUrl: `${baseUrl}/gracias`,
    cancelUrl: `${baseUrl}/tienda`,
  };
  if (!cart) {
    throw new Error("El carrito está vacío o no existe.");
  }

  const maxAttempts = 3;
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      return await checkoutBasket(tebexToken, cart, {
        username,
        ...url,
        customData: {},
        autoRedirect: true,
      });
    } catch (error) {
      const status = error?.response?.status;

      if (status >= 500 && status < 600) {
        attempt++;
        if (attempt === maxAttempts) throw error;
        await new Promise((res) => setTimeout(res, 500));
      } else {
        throw error;
      }
    }
  }
}
