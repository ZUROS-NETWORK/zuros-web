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

export async function updateProduct(db:D1Database, id:string, {name, description, shortDescription, discount, image}:{
  name: string;
  description: string;
  shortDescription: string;
  discount: number;
  image: string;
}) {
  const query = `
    UPDATE package
    SET 
      name = ?, 
      description = ?, 
      short_description = ?, 
      discount = ?, 
      image = ?, 
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?`;

  const params = [name, description, shortDescription, discount, image, id];

  const result:any = await db.prepare(query).bind(...params).run();

  return result.meta.changes > 0;
}
