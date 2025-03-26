import { Context } from "hono";
import { getAllPackages, getOnePackageById, updateProduct } from "../services/packages";

export async function getPackages(c: Context) {
  const db = c.env.DB;
  const categoryId = c.req.query("categoryId");
  const categorySlug = c.req.query("categorySlug");
  const packages = await getAllPackages(db, categoryId, categorySlug);
  if (!packages) return c.json({ error: "Category not found or there are no packages" }, 404);
  return c.json(packages);
}

export async function getPackageById(c: Context) {
  const db = c.env.DB;
  const id = c.req.param("id");

  const packageData = await getOnePackageById(db, id);
  if (!packageData) return c.json({ error: "Packages not found" }, 404);

  return c.json(packageData);
}

export async function updatePackageHandler(c: Context) {
  const db = c.env.DB;
  const id = c.req.param("id");
  
  const { name, description, shortDescription, discount, image } = await c.req.json();
  if (!name || !description || !shortDescription || discount === undefined || discount === null  || !image) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const productUpdated = await updateProduct(db, id, { name, description, shortDescription, discount, image });
 if (!productUpdated) {
    return c.json({ error: "Product not found or no changes were made" }, 404);
  }

  return c.json({ message: "Product updated successfully" });
}