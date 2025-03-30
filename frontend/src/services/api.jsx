const API_BASE_URL = import.meta.env.VITE_SHOP_API_URL || "http://localhost:8787/api";

async function fetchData(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch error (${endpoint}):`, error.message);
    throw error;
  }
}


export const getCategories = () => fetchData("/categories");


export const getPackages = (categoryId) => {
  if (!categoryId) throw new Error("Category ID is required.");
  return fetchData(`/packages?categoryId=${categoryId}`);
};


export async function getCheckoutId({ id, username }) {
  if (!id || !username) throw new Error("Cart 'id' and 'username' are required.");

  const baseUrl = window.location.origin;
  const payload = {
    id,
    username,
    completeUrl: `${baseUrl}/gracias`,
    cancelUrl: `${baseUrl}/tienda`,
  };

  const data = await fetchData("/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!data.basketId) throw new Error("Response does not contain a valid 'basketId'.");

  return data.basketId;
}


export async function getCart (cartId) {
  try {
    const cart = await fetchData(`/cart/${cartId}`);
    return cart;
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    throw error;
  }
}


export const createCart = async (items) => {
  try {
    const data = await fetchData("/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    return data.cartId;
  } catch (error) {
    console.error("Error creating cart:", error.message);
    throw error;
  }
};


export const updateCart = async (cartId, items) => {
  if (!cartId) return;

  try {
    await fetchData(`/cart/${cartId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
     return fetchData
  } catch (error) {
    console.error("Error updating cart:", error.message);
    throw error;
  }
};


export async function deleteCartDb(cartId) {
  if (!cartId) return;

  try {
    await fetchData(`/cart/${cartId}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error deleting cart:", error.message);
    throw error;
  }
}
