import { Context } from "hono";
import { checkoutService } from "../services/checkout";

export const checkoutHandle = async (c:Context) => {
  try {
    const db: D1Database = c.env.DB;
    const tebexToken = c.env.TEBEX_PUBLIC_TOKEN;
    
    const body = await c.req.json();
    const { id, username, completeUrl, cancelUrl } = body;

    if (!id || !username || !completeUrl || !cancelUrl) {
      return c.json({ error: "Missing required parameters" }, 400);
    }

    const result = await checkoutService(db, tebexToken, id, { username, completeUrl, cancelUrl });
    return c.json({ success: true, basketId: result });
  } catch (error:any ){
    return c.json({ error: error.message }, 500);
  }
};