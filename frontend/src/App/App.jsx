import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import Info from "../pages/Info";
import Maps from "../pages/Maps";
import Error404 from "../components/Error/Error404";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Shop";
import { Layout } from "../components/Layout/Layout";
import { LegalTerms } from "../pages/LegalTerms";
import { Join } from "../pages/join";
import { CartProvider } from "../context/CartContext";
import { CheckoutProvider } from "../context/CheckoutContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />

          <Route path="info" element={<Info />} />
          <Route path="mapa" element={<Maps />} />
          <Route path="tienda" element={<CartProvider><CheckoutProvider><Products /></CheckoutProvider></CartProvider>} />
          <Route path="tienda/:prodcutId" element={<ProductDetails />} />
          <Route path="legal-terms" element={<LegalTerms />} />
          <Route path="join" element={<Join />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
