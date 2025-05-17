async function getData(tebexToken, endpoint, method, body) {
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

export async function createBasket(
  tebexToken,
  { username, completeUrl, cancelUrl, customData, autoRedirect }
) {
  return getData(tebexToken, 'baskets', 'POST', {
    username: username,
    complete_url: completeUrl,
    cancel_url: cancelUrl,
    custom: customData,
    complete_auto_redirect: autoRedirect
  });
}

export async function getBasket(tebexToken, basketId) {
  return getData(tebexToken, `baskets/${basketId}`, 'GET');
}

export async function addPackageToBasket(tebexToken, basketId, packageId, quantity = 1) {
  return getData(tebexToken, `/baskets/${basketId}/packages`, 'POST', {
    package_id: packageId,
    quantity: quantity
  });
}

export async function checkoutBasket(
  tebexToken,
  packages,
  { username, completeUrl, cancelUrl, customData, autoRedirect }
) {
  const generateBasket = await createBasket(tebexToken, {
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
