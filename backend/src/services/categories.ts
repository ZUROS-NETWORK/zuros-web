export async function getAllCategories(db: D1Database, includePackages?: string) {
   const { results } = await db.prepare("SELECT * FROM category ORDER BY sort_order ASC").all();
  return results 
}

export async function getOneCategory(db: D1Database, idOrSlug?: string) {
  const { results } = await db
    .prepare('SELECT * FROM category WHERE id = ? OR slug = ?')
    .bind(idOrSlug, idOrSlug)
    .all();

  return results.length > 0 ? results[0] : null;
}
