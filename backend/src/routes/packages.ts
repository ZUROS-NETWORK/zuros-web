import { Hono } from "hono"
import { getPackages, getPackageById, createPackageHandler, updatePackageHandler, deletePackageHandler } from "../handlers/packages"
import { authMiddleware } from "../middlewares/auth"

import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

export const packageSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(1, "Name is required"),
    description: z.string().nullable(),
    short_description: z.string().max(36, "Short description must be at most 36 characters").nullable(),
    base_price: z.number().min(0),
    total_price: z.number().min(0),
    discount: z.number().min(0),
    currency: z.string().min(1, "Currency is required"),
    sort_order: z.number().int().min(0),
    image: z.string().url().nullable(),
    type: z.string(),
    expiration_date: z.string().nullable(),
    created_at: z.string().nullable(),
    updated_at: z.string().nullable(),
    category_id: z.number().int().positive()
});

export const packagesRouter = new Hono()

packagesRouter.get("/", getPackages)
packagesRouter.get("/:id", getPackageById)
packagesRouter.post("/", zValidator('json', packageSchema), authMiddleware, createPackageHandler);
packagesRouter.put("/:id", zValidator('json', packageSchema), authMiddleware, updatePackageHandler);
packagesRouter.delete("/:id", authMiddleware, deletePackageHandler)