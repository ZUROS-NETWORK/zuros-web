import "./ProductCard.css";
function parseProductName(text) {
    const regex = /(.*?)\s*\[(.*?)\]/;
    const match = text.match(regex);

    if (match) {
        return {
            name: match[1].trim(),
            extra: match[2].trim()
        };
    }
    return null
}
export default function ProductCard({
  image,
  name,
  shortDescription,
  basePrice,
  totalPrice,
  discount,
  currency,
  onDetailsClick,
  onAddToCart,
}) {
  const originalPrice = discount > 0 ? basePrice / (1 - discount / 100) : null;
  const parsedData = parseProductName(name);
  return (
    <div className="product-card">
      <div className="product-card-image" onClick={onDetailsClick}>
        <img src={image} alt={name} />
        <div className="product-card-overlay"></div>
         {parsedData?.extra && <div className="product-card-label">{parsedData.extra}</div>}
        {discount > 0 && <div className="discount-label">{discount}% OFF</div>}
      </div>
      <div className="product-card-content" onClick={onDetailsClick}>
        <h3 className="product-card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          </svg>
          {parsedData?.name ? parsedData.name : name}
        </h3>
        <p className="product-card-text">{shortDescription}</p>
      </div>
      <div className="product-card-price" onClick={onDetailsClick}>
        {originalPrice && <p className="old-price">${originalPrice.toFixed(2)} {currency}</p>}
        <p className="new-price">${totalPrice.toFixed(2)} {currency}</p>
      </div>
      <div className="product-card-actions">
        <button className="btn btn-details" onClick={onDetailsClick}>
          Ver detalles
        </button>
        <button className="btn btn-buy" onClick={onAddToCart}>
          Comprar
        </button>
      </div>
    </div>
  );
}