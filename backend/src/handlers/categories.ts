import { Context } from "hono";
import { getAllPackages, getOnePackageById, updateProduct } from "../services/packages";
import { getAllCategories, getOneCategory } from "../services/categories";

export async function getCategories(c: Context) {
  const db = c.env.DB;
  const includePackages = c.req.query("includePackages");
  const packages = await getAllCategories(db, includePackages);
  return c.json(packages);
}

export async function getCategoryByIdOrSlug(c: Context) {
  const db = c.env.DB;
  const idOrSlug = c.req.param("idOrSlug");
  const categoryData = await getOneCategory(db, idOrSlug);
  if (!categoryData) {
    return c.json({ error: "Category not found" }, 404);
  }
  return c.json(categoryData);
}
