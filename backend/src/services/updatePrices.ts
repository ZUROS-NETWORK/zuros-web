import {getCategories, getPackages} from './tebex'

export async function updatePackages(db: D1Database) {
  const categories = await getCategories();
console.log(categories)
  for (const category of categories) {
    await db.prepare(`
      INSERT INTO category (id, name, description, slug, sort_order)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET 
        name = excluded.name,
        description = excluded.description,
        sort_order = excluded.sort_order
    `).bind(
      category.id,
      category.name,
      category.description || '',
      category.slug, 
      category.order || 0
    ).run();
  }

  const packages = await getPackages();

  for (const pkg of packages) {
    await db.prepare(`
      INSERT INTO package (id, name, description, base_price, total_price, sales_tax, currency, sort_order, image, type, expiration_date, created_at, updated_at, category_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET 
        name = excluded.name,
        description = excluded.description,
        base_price = excluded.base_price,
        total_price = excluded.total_price,
        sales_tax = excluded.sales_tax,
        currency = excluded.currency,
        sort_order = excluded.sort_order,
        image = excluded.image,
        type = excluded.type,
        expiration_date = excluded.expiration_date,
        created_at = excluded.created_at,
        updated_at = excluded.updated_at,
        category_id = excluded.category_id
    `).bind(
      pkg.id,
      pkg.name,
      pkg.description,
      pkg.base_price,
      pkg.total_price,
      pkg.sales_tax || 0,
      pkg.currency,
      pkg.order || 0,
      pkg.image,
      pkg.type,
      pkg.expiration_date || null,
      pkg.created_at || null,
      pkg.updated_at || null,
      pkg.category.id
    ).run();
  }

  return { updated: packages.length };
}
