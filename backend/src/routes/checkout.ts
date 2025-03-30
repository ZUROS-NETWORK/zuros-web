import { Hono } from "hono"
import { checkoutHandle } from "../handlers/checkout"

export const checkoutHRouter = new Hono()

checkoutHRouter.post("/", checkoutHandle)