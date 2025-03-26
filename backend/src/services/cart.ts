export async function getCart(db: D1Database, id: string) {
    const { results } = await db
        .prepare(`
      SELECT  
        ci.product_id, 
        ci.quantity, 
        p.id AS product_id, 
        p.name, 
        p.short_description, 
        p.base_price, 
        p.total_price, 
        p.discount, 
        p.currency, 
        p.image
      FROM cart c
      JOIN cart_items ci ON ci.cart_id = c.id
      JOIN package p ON ci.product_id = p.id
      WHERE c.id = ?
    `)
        .bind(id)
        .all()

    return results.length > 0 ? results : null
}

export async function saveCart(db: D1Database, items: any[]) {
  const cartId = crypto.randomUUID()

  try {
    await db
      .prepare("INSERT INTO cart (id) VALUES (?)")
      .bind(cartId)
      .run()
    for (const item of items) {
      const productCheck = await db
        .prepare("SELECT id FROM package WHERE id = ?")
        .bind(item.productId)
        .first()

      if (!productCheck) {
        throw new Error(`Product with ID ${item.productId} does not exist.`)
      }
      await db
        .prepare("INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)")
        .bind(cartId, item.productId, item.quantity)
        .run()
    }
    return cartId
  } catch (error:any) {
    throw new Error("An error occurred while saving the cart:" + error.message)
  }
}


export async function modifyCart(db: D1Database, id: string, items: any[]) {
    for (const item of items) {
        const existingItem = await db
            .prepare("SELECT * FROM cart_items WHERE cart_id = ? AND product_id = ?")
            .bind(id, item.productId)
            .first();
        if (existingItem) {
            await db
                .prepare("UPDATE cart_items SET quantity = ? WHERE cart_id = ? AND product_id = ?")
                .bind(item.quantity, id, item.productId)
                .run();
        } else {
            await db
                .prepare("INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)")
                .bind(id, item.productId, item.quantity)
                .run();
        }
    }

    const productIds = items.map(item => item.productId);

    await db
        .prepare("DELETE FROM cart_items WHERE cart_id = ? AND product_id NOT IN (" + productIds.map(() => "?").join(",") + ")")
        .bind(id, ...productIds)
        .run();

    return true;
}





export async function removeCart(db: D1Database, id: string) {
    const result = await db.prepare("DELETE FROM cart WHERE id = ?").bind(id).run()
    return result.meta.changes > 0
}
