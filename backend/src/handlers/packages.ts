import { Context } from "hono";
import { getAllPackages, getOnePackageById, updateProduct, createPackage, deletePackage } from "../services/packages";

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

export async function createPackageHandler(c: Context) {
  try {
    const db = c.env.DB;
    const data = await c.req.json();
    const newPackage = await createPackage(db, data);

    return c.json({ success: true, package: newPackage }, 201);
  } catch (error: any) {
    return c.json({ success: false, message: error.message }, 500);
  }
}

export async function updatePackageHandler(c: Context) {
  const db = c.env.DB;
  const id = c.req.param("id");

  const data = await c.req.json();

  const productUpdated = await updateProduct(db, id, data);
  if (!productUpdated) {
    return c.json({ error: "Product not found or no changes were made" }, 404);
  }

  return c.json({ message: "Product updated successfully" });
}

export const deletePackageHandler = async (c: Context) => {
  try {
    const id = c.req.param('id');
    const db = c.env.DB;
    if (!id) {
      return c.json({ success: false, message: 'Package ID is required.' }, 400);
    }

    const result = await deletePackage(db, id);
    return c.json(result, 200);
  } catch (error: any) {
    return c.json({ success: false, message: error.message }, 404);
  }
};