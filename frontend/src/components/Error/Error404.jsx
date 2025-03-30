import { Link } from "react-router-dom";
import "./Error404.css";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="title">404 - Página no encontrada</h1>
      <p className="message">La página que buscas no existe.</p>
      <Link to="/" className="button">Ir al Home</Link>
    </div>
  );
};

export default NotFound;
