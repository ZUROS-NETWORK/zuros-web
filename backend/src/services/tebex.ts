import { Context } from "hono";

async function getData(tebexToken: string, endpoint: string, method: string, body?: any) {
  const BASE_URL = endpoint.startsWith("/")
    ? `https://headless.tebex.io/api`
    : `https://headless.tebex.io/api/accounts/${tebexToken}/`;
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : null
  });
  if (!response.ok) {
    throw {
      error: "Tebex API error",
      response
    };
  }

  return response.json();
   
}

export async function getCategories(tebexToken: string, includePackages = false) {
  return getData(tebexToken, `categories?includePackages=${includePackages ? 1 : 0}`, 'GET');
}

export async function getCategory(tebexToken: string, categoryId: string, includePackages = false) {
  return getData(tebexToken, `categories/${categoryId}?includePackages=${includePackages ? 1 : 0}`, 'GET');
}

export async function getPackages(tebexToken: string) {
  return getData(tebexToken, 'packages', 'GET');
}

export async function getPackage(tebexToken: string, packageId: string) {
  return getData(tebexToken, `packages/${packageId}`, 'GET');
}

export async function createBasket(
  tebexToken: string,
  { username, completeUrl, cancelUrl, customData, autoRedirect }: {
    username: string,
    completeUrl: string;
    cancelUrl: string;
    customData: object;
    autoRedirect: boolean;
  }
) {
  return getData(tebexToken, 'baskets', 'POST', {
    username: username,
    complete_url: completeUrl,
    cancel_url: cancelUrl,
    custom: customData,
    complete_auto_redirect: autoRedirect
  });
}

export async function getBasket(tebexToken: string, basketId: string) {
  return getData(tebexToken, `baskets/${basketId}`, 'GET');
}

export async function addPackageToBasket(tebexToken: string, basketId: string, packageId: number, quantity = 1) {
  return getData(tebexToken, `/baskets/${basketId}/packages`, 'POST', {
    package_id: packageId,
    quantity: quantity
  });
}

export async function checkoutBasket(
  tebexToken: string,
  packages: { id: number; quantity: number }[],
  { username, completeUrl, cancelUrl, customData, autoRedirect }: {
    username: string,
    completeUrl: string;
    cancelUrl: string;
    customData: object;
    autoRedirect: boolean;
  }
) {
  const generateBasket:any = await createBasket(tebexToken, {
    username,
    completeUrl,
    cancelUrl,
    customData,
    autoRedirect
  });

  const basketId = generateBasket.data.ident

  for (const item of packages) {
    await addPackageToBasket(tebexToken, basketId, item.id, item.quantity);
  }

  return basketId;
}

export async function updateTebexPackage(
  tebexSecret: string,
  packageId: number,
  packageData: { disabled: boolean; name: string; price: number }
): Promise<any> {
  try {
    const response = await fetch(`https://plugin.tebex.io/package/${packageId}`, {
      method: "PUT",
      headers: {
        "X-Tebex-Secret": tebexSecret,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageData),
    });
    if (!response.ok) {
      console.error(response)
      throw new Error(`Error ${response.status}`);
    }

    return true
  } catch (error) {
    console.error("Error al actualizar el paquete:", error);
    throw error;
  }
}