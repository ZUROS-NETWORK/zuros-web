import { Hono } from "hono"
import { authRoutes } from "./auth"
import { updatePricesRouter } from "./updatePrices"
import { packagesRouter } from "./packages"

export const router = new Hono()

router.route('/auth', authRoutes)
// Temporary function to fetch Tebex packages
router.route('/update', updatePricesRouter)
router.route('/packages', packagesRouter)