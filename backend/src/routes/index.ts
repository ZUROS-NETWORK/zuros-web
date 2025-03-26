import { Hono } from "hono"
import { authRoutes } from "./auth"

export const router = new Hono()

router.route('/auth', authRoutes)