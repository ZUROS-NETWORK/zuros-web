
import { FloatingCartButton } from "../../components/shop/CartButton/CartButton";
import { AlertTriangle } from "lucide-react";
import "./styles.css";
import {useProductsContext} from "../../context/ProductsContext";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/shop/Card/ProductCard";
import { ProductCardSkeleton } from "../../components/shop/Card/SkeletonCard";
import { ShopBanner } from "../../components/shop/ShopBanner/ShopBanner";
import { CartPanel } from "../../components/shop/Cart/CartPanel";
import { LoginOverlay } from "../../components/shop/LoginOverlay/LoginOverlay";
import {ProductDetails} from "../../components/shop/ProductDetails/ProductDetails";

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
  const { toggleCart, addToCart } = useCart();

  return (
    <section className="categories-section">
      <LoginOverlay/>
      <CartPanel />
        {packageDetails && <ProductDetails closeDetails={closeDetails} packageDetails={packageDetails} onAddToCart={addToCart}/>}
      <ShopBanner />

      {error && <div className="error-message">
          <AlertTriangle />
          <span>Ups... algo salió mal. Intenta nuevamente más tarde.</span>
          <span>Si el problema persiste, contacta a un administrador.</span>
        </div>}

      <ul>
        {categories.map((category) => (
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
      <FloatingCartButton onClick={toggleCart} />
    </section>
  );
};

export default Products;
