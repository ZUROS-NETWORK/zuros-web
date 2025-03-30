import Tebex from "@tebexio/tebex.js";
export async function checkout({ id, username }) {
   const currentUrl = window.location.origin
   console.log(currentUrl)
  const completeUrl = currentUrl + '/gracias'
  const cancelUrl = currentUrl + '/join'
  try {
    Tebex.checkout.destroy();
    const response = await fetch("http://localhost:8787/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        username,
        completeUrl,
        cancelUrl
      })
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.basketId) {
      throw new Error("La respuesta no contiene un 'basketId' válido.");
    }

    Tebex.checkout.init({
      ident: data.basketId,
      locale: 'es_ES'
    });
    Tebex.checkout.launch();
  } catch (error) {
    console.error("Error en el checkout:", error);
  }
}
