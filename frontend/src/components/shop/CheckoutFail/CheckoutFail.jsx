import Tebex from "@tebexio/tebex.js";
export const CheckoutFail = () => {
  return (
    <div className="login-container" onClick={()=>Tebex.checkout.launch()}>
              <h1 className="login-error-message">Tu navegador bloqueó la ventana de pago</h1>
            <h2 className="login-error-message">Para continuar con el pago, haz click en el botón.</h2>
            <button>Continuar</button>
        </div>
  );
};
