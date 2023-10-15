import { Outlet, NavLink } from "react-router-dom";

const Navbar = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <NavLink end to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/info">Info</NavLink>
          </li>
          <li>
            <NavLink end to="/tienda">Tienda</NavLink>
          </li>
          <li>
            <NavLink to="/mapa">Mapas</NavLink>
          </li>
          <li>
          <a href="https://discord.zuros.xyz/">Discord</a>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Navbar;