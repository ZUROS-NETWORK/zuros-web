import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src="/icon3.png" alt="zuros network logo" />
        <h1 className="logo-name">
          <span className="blue-logo">ZUROS </span>
          <span>NETWORK</span>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink end to="/">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/info">Info</NavLink>
          </li>
          <li>
            <NavLink end to="/tienda">
              Tienda
            </NavLink>
          </li>
          <li>
            <NavLink to="/mapa">Mapas</NavLink>
          </li>
          <li>
            <a href="https://discord.zuros.xyz/">Discord</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
