import "./ShopBanner.css";

export function ShopBanner() {
    return (
        <section className="shop-banner">
            <div className="shop-banner-container">
                <h1 className="shop-banner-title">¡Bienvenido a la tienda de Zuros Network!</h1>
                <p className="shop-banner-description">
                    Mantener un servidor como Zuros requiere esfuerzo, tiempo y dinero. Cada compra es apreciada ❤️
                </p>
                <div className="shop-banner-tag-wrapper">
                    <span className="shop-banner-tag">¡OFERTAS ESPECIALES LIMITADAS!</span>
                </div>
            </div>
        </section>
    );
}
