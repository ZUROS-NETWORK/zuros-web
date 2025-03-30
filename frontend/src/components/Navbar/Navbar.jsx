import { NavLink } from "react-router-dom";
import { useState } from 'react'
import "./Navbar.css";
import { BurguerButton } from "../BurguerButton/BurguerButton";

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false)
const handleMenu = () => {
  setMenuStatus(!menuStatus)
}
  return (
    <header>
      <div className="logo">
        <img src="/icon3.png" alt="zuros network logo" />
        <h1 className="logo-name">
          <span className="blue-logo">ZUROS </span>
          <span>NETWORK</span>
        </h1>
      </div>
      <nav className={`navbar ${menuStatus ? 'mobile-navbar-active' : ''}`}>
        <ul>
          <li onClick={()=> setMenuStatus(false)}>
            <NavLink end to="/">
              Inicio
            </NavLink>
          </li>
          <li onClick={()=> setMenuStatus(false)}>
            <NavLink to="/info">Info</NavLink>
          </li>
          <li onClick={()=> setMenuStatus(false)}>
            <NavLink to="/tienda">Tienda</NavLink>
          </li>
          <li onClick={()=> setMenuStatus(false)}>
            <NavLink to="https://map.zuros.xyz/">Mapas</NavLink>
          </li>
          <li onClick={()=> setMenuStatus(false)}>
            <a href="https://discord.zuros.xyz/">Discord</a>
          </li>
        </ul>
      </nav>
      <nav onClick={()=> handleMenu()} className="mobile-navbar-button">
        <BurguerButton isOpen={menuStatus} />
      </nav>
    </header>
  );
};

export default Navbar;
