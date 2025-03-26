const tebexToken = 'l9j9-cf13199dfe8cadbcdbb253df6ad3b7c001042512';
const BASE_URL = `https://headless.tebex.io/api/accounts/${tebexToken}/`;

async function getData(endpoint: string, method: string, body?: any) {
  const response = await fetch(BASE_URL + endpoint, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : null
  });
  
  if (!response.ok) throw new Error(`A temporary problem with the payment provider.: ${response.status}`);
  const {data}:{data:any}= await response.json();
  return data
}

export async function getCategories(includePackages = false) {
  return getData(`categories?includePackages=${includePackages ? 1 : 0}`, 'GET');
}

export async function getCategory(categoryId: string, includePackages = false) {
  return getData(`categories/${categoryId}?includePackages=${includePackages ? 1 : 0}`, 'GET');
}

export async function getPackages() {
  return getData('packages', 'GET');
}

export async function getPackage(packageId: string) {
  return getData(`packages/${packageId}`, 'GET');
}

export async function createBasket(
  { completeUrl, 
  cancelUrl, 
  customData, 
  autoRedirect}: { completeUrl: string, 
  cancelUrl: string, 
  customData: object, 
  autoRedirect:boolean}
) {
  return getData('baskets', 'POST', {
    complete_url: completeUrl,
    cancel_url: cancelUrl,
    custom: customData,
    complete_auto_redirect: autoRedirect
  });
}

export async function getBasket(basketId: string) {
  return getData(`baskets/${basketId}`, 'GET');
}

export async function addPackageToBasket(basketId: string, packageId: number, quantity = 1) {
  return getData(`baskets/${basketId}/packages`, 'POST', {
    package_id: packageId,
    quantity: quantity
  });
}

export async function checkoutBasket(basketId: string) {
  return getData(`baskets/${basketId}/checkout`, 'POST');
}
