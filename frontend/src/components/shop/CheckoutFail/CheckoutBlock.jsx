import Tebex from "@tebexio/tebex.js";
export const CheckoutBlock = () => {
  return (
    <div className="checkout-fail-container" onClick={() => Tebex.checkout.launch()}>
      <h1 className="checkout-fail-message">Tu navegador bloqueó la ventana de pago</h1>
      <h2 className="checkout-fail-message">Para continuar con el pago, haz click en el botón.</h2>
      <div className="checkout-fail-container-buttons">
        <button>Continuar</button>
      </div>
    </div>
  );
};
