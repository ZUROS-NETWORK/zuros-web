import { X } from 'lucide-react';
import './CheckoutFail.css';
export const CheckoutFail = ({ close, retry }) => {
  return (
    <div className="checkout-fail-container">
      <div className="product-details-title-bar">
      <p className="checkout-fail-message">Ocurrió un error</p>
          <button onClick={close} className="details-close-button">
            <X className="details-close-button-icon" />
          </button>
        </div>
      <h1 className="checkout-fail-message">Hubo un error al procesar el pago.</h1>
      <h2 className="checkout-fail-message">Por favor, verifica que tu nombre sea correcto e inténtalo nuevamente.</h2>
      <div className="checkout-fail-container-buttons">
        <button onClick={retry}>Reintentar</button>
      </div>
    </div>
  );
};
