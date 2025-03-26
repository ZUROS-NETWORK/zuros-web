import { Hono } from "hono"
import { getCategories, getCategoryByIdOrSlug } from "../handlers/categories"

export const categoriesRouter = new Hono()

categoriesRouter.get("/", getCategories)
categoriesRouter.get("/:idOrSlug", getCategoryByIdOrSlug)
