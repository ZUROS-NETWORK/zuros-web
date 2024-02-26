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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />

          <Route path="info" element={<Info />} />
          <Route path="mapa" element={<Maps />} />
          <Route path="tienda" element={<Products />} />
          <Route path="products/:prodcutId" element={<ProductDetails />} />
          <Route path="legal-terms" element={<LegalTerms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
