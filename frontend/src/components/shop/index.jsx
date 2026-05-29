
import { CartButton } from "./CartButton/CartButton";
import { AlertTriangle } from "lucide-react";
import "./styles.css";
import { useProductsContext } from "./context/ProductsContext";
import { useCart } from "./context/CartContext";
import ProductCard from "./Card/ProductCard";
import { ProductCardSkeleton } from "./Card/SkeletonCard";
import { ShopBanner } from "./ShopBanner/ShopBanner";
import { CartPanel } from "./Cart/CartPanel";
import { LoginOverlay } from "./LoginOverlay/LoginOverlay";
import { ProductDetails } from "./ProductDetails/ProductDetails";

const Products = () => {
  const {
    categories,
    packages,
    selectedCategoryId,
    isLoading,
    error,
    setSelectedCategoryId,
    showDetails,
    closeDetails,
    packageDetails

  } = useProductsContext();
  const { toggleCart, addToCart, cart } = useCart();

  return (
    <section className="categories-section">
      <LoginOverlay />
      <CartPanel />
      {packageDetails && <ProductDetails closeDetails={closeDetails} packageDetails={packageDetails} onAddToCart={addToCart} />}
      <ShopBanner />

      {error && <div className="error-message">
        <AlertTriangle />
        <span>Ups... algo salió mal. Intenta nuevamente más tarde.</span>
        <span>Si el problema persiste, contacta a un administrador.</span>
      </div>}

      <ul>
        {categories
          .filter(category => category.package_count > 0)
          .map((category) => (
            <li key={category.id}>
              <button
                className={`category-button ${selectedCategoryId === category.id ? "active" : ""}`}
                onClick={() => setSelectedCategoryId(category.id)}
              >
                {category.name}
              </button>
            </li>
          ))}
      </ul>

      {isLoading ? (
        <div className="product-grid">
          <ProductCardSkeleton />
        </div>
      ) : (
        <div className="product-grid">
          {packages.map((packageItem) => (
            <ProductCard
              key={packageItem.id}
              image={packageItem.image}
              name={packageItem.name}
              shortDescription={packageItem.short_description}
              basePrice={packageItem.base_price}
              totalPrice={packageItem.total_price}
              discount={packageItem.discount}
              currency={packageItem.currency}
              onDetailsClick={() => showDetails(packageItem.id)}
              onAddToCart={() => addToCart(packageItem.id, 1)}
            />
          ))}
        </div>
      )}
      <CartButton onClick={toggleCart} itemCount={cart.length} />
    </section>
  );
};

export default Products;
