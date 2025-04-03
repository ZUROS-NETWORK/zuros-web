import { Package } from "../types/types";
import { updateTebexPackage } from "./tebex";

export async function getAllPackages(db: D1Database, categoryId?: string, categorySlug?: string) {
  let query = "SELECT * FROM package";
  const params: any[] = [];
  if (categoryId) {
    query += " WHERE category_id = ?";
    params.push(categoryId);
  } 
  else if (categorySlug) {
    query += " WHERE category_id = (SELECT id FROM category WHERE slug = ?)";
    params.push(categorySlug);
  }
  query += " ORDER BY sort_order ASC";
  const { results } = await db.prepare(query).bind(...params).all();
  return results.length > 0 ? results : null;
}


export async function getOnePackageById(db: D1Database, id: string) {
  const { results } = await db
    .prepare('SELECT * FROM package WHERE id = ?')
    .bind(id)
    .all();

  return results.length > 0 ? results[0] : null;
}

export async function createPackage(db: D1Database, data:Package) {
  await db.prepare(
    `INSERT INTO package (id, name, description, short_description, base_price, total_price, discount, sales_tax, currency, sort_order, image, type, expiration_date, created_at, updated_at, category_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    data.id, data.name, data.description, data.short_description,
    data.base_price, data.total_price, data.discount, data.sales_tax,
    data.currency, data.sort_order, data.image, data.type,
    data.expiration_date, data.created_at, data.updated_at, data.category_id
  ).run();

  return { ...data };
}

export async function updateProduct(
  db: D1Database, 
  tebexSecret: string, 
  id: string, 
  data: Package
): Promise<boolean> {
  try {
    await updateTebexPackage(tebexSecret, data.id, {
      disabled: false,
      name: data.name,
      price: data.base_price,
    });
    const query = `
      UPDATE package
      SET 
        name = ?, 
        description = ?, 
        short_description = ?, 
        base_price = ?, 
        total_price = ?, 
        discount = ?, 
        sales_tax = ?, 
        currency = ?, 
        sort_order = ?, 
        image = ?, 
        type = ?, 
        expiration_date = ?, 
        updated_at = ?, 
        category_id = ?
      WHERE id = ?`;

    const params = [
      data.name, 
      data.description, 
      data.short_description, 
      data.base_price, 
      data.base_price,  
      data.discount, 
      data.sales_tax, 
      data.currency, 
      data.sort_order, 
      data.image, 
      data.type, 
      data.expiration_date, 
      data.updated_at, 
      data.category_id,
      id
    ];

    const result = await db.prepare(query).bind(...params).run();

    return result.meta.changes > 0;
  } catch (error) {
    return false;
  }
}


export async function deletePackage(db: D1Database, id: string) {
  try {
    const result = await db.prepare(
      `DELETE FROM package WHERE id = ?`
    ).bind(id).run();

    if (result.meta.changes === 0) {
      throw new Error(`Package with ID ${id} not found.`);
    }

    return { success: true, message: `Package with ID ${id} deleted successfully.` };
  } catch (error:any) {
    throw new Error(`Error deleting package: ${error.message}`);
  }
}
