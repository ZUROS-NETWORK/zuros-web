import { Context } from "hono";
import { getCart } from "./cart";
import { createBasket, addPackageToBasket, checkoutBasket } from "./tebex";

export async function checkoutService(db: D1Database, tebexToken: string, cartId: string, { username, completeUrl, cancelUrl }: {
  username: string,
  completeUrl: string;
  cancelUrl: string;
}) {
  const cart: any = await getCart(db, cartId);

  if (!cart) {
    throw new Error("El carrito está vacío o no existe.");
  }

  const maxAttempts = 3;
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      return await checkoutBasket(tebexToken, cart, {
        username,
        completeUrl,
        cancelUrl,
        customData: {},
        autoRedirect: true,
      });
    } catch (error: any) {
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
