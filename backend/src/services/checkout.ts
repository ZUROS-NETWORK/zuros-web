import { Context } from "hono";
import { getCart } from "./cart";
import { createBasket, addPackageToBasket, checkoutBasket } from "./tebex";

export async function checkoutService(db: D1Database, tebexToken: string, cartId: string, { username, completeUrl, cancelUrl }: {
  username: string,
  completeUrl: string;
  cancelUrl: string;
}) {
  const cart:any = await getCart(db, cartId);

  if (!cart) {
    throw new Error("El carrito está vacío o no existe.");
  }

   return await checkoutBasket(tebexToken, cart, { username, completeUrl, cancelUrl, customData:{}, autoRedirect:true })
}
