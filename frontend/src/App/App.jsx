import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "../pages/Home";
import Info from "../pages/Info";
import Maps from "../pages/Maps";
import Error404 from "../components/Error/Error404";
import Products from "../pages/Shop";
import { Layout } from "../components/Layout/Layout";
const LegalTerms = lazy(() => import("../pages/LegalTerms"));
import { Join } from "../pages/join";
import { CartProvider } from "../context/CartContext";
import { CheckoutProvider } from "../context/CheckoutContext";
import { ProductsProvider } from "../context/ProductsContext";
import { SEO } from "../components/Seo";

function App() {
  return (
    <>
    <SEO/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="mapa" element={<Maps />} />
          <Route path="legal-terms" element={<Suspense fallback={<div>Cargando...</div>}>
                <LegalTerms />
              </Suspense>} />
          <Route path="join" element={<Join />} />
          
          <Route path="tienda" element={
            <ProductsProvider>
              <CartProvider>
                <CheckoutProvider>
                  <Products />
                </CheckoutProvider>
              </CartProvider>
            </ProductsProvider>
          } />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
