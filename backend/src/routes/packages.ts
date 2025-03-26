import { Hono } from "hono"
import { getPackages, getPackageById, updatePackageHandler } from "../handlers/packages"
import { authMiddleware } from "../middlewares/auth"

export const packagesRouter = new Hono()

packagesRouter.get("/", getPackages)
packagesRouter.get("/:id", getPackageById)
packagesRouter.put("/:id", authMiddleware, updatePackageHandler);