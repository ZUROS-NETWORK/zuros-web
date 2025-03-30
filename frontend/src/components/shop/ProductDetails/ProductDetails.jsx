import { X } from "lucide-react";
import './ProductDetails.css';

export const ProductDetails = ({packageDetails, closeDetails, onAddToCart}) => {
  const originalPrice = packageDetails.discount > 0 ? packageDetails.total_price / (1 - packageDetails.discount / 100) : null;
  return (
    <div className="product-details-overlay">
      <div className="product-details-container">
        <div className="product-details-title-bar">
          <h2 className="product-details-name">{packageDetails.name}</h2>
          <button onClick={closeDetails} className="details-close-button">
            <X className="details-close-button-icon" />
          </button>
        </div>
        <div className="product-details-info">
          <img
            src={packageDetails.image}
            alt={packageDetails.name}
            className="product-details-image"
          />
          <div className="product-details-description"  dangerouslySetInnerHTML={{ __html: packageDetails.description }}/>
       
        </div>
        <div className="product-details-price">
          {originalPrice && <p className="old-price">${originalPrice.toFixed(2)} {packageDetails.currency}</p>}
              <p className="new-price">${packageDetails.total_price.toFixed(2)} USD</p>

        </div>
        <button className="add-to-cart" onClick={(()=> {onAddToCart(packageDetails.id, 1); closeDetails()})}>Agregar al carrito</button>
      </div>
    </div>
  );
};
