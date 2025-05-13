export async function getAllCategories(db: D1Database, includePackages?: string) {
  const query = `
  SELECT 
    c.*, 
    (SELECT COUNT(*) FROM package p WHERE p.category_id = c.id) as package_count
  FROM category c
  ORDER BY c.sort_order ASC
`;
const { results } = await db.prepare(query).all();
return results; 
}

export async function getOneCategory(db: D1Database, idOrSlug?: string) {
  const { results } = await db
    .prepare(`
      SELECT 
        c.*, 
        (SELECT COUNT(*) FROM package p WHERE p.category_id = c.id) as package_count
      FROM category c
      WHERE (c.id = ? OR c.slug = ?)
    `)
    .bind(idOrSlug, idOrSlug)
    .all();

  if (results.length > 0) {
    return results
  }
  return null;
}