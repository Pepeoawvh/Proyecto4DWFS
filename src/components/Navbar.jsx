// Link reemplza el "Ancle" y con esto no recarga la informacion cada vez que cambio de enlance en el Navbar
// me permite hacer el SPA(Single Page APlication). Transforma mi app comun en una SPA

// y NavLink es casi igual que el Link, pero a nuestro componente le agrega una clase ".active"

import { NavLink, Link } from 'react-router-dom'  
import '../styles/Navbar.css'
export const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
            <Link to="/">
                <div className="logo"/>
            </Link>
        </div>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/productos">Menú</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Reservas</NavLink>
          </li>
          <li>
          <li>
            <NavLink to="/sobre-nosotros">Encuentranos</NavLink>
          </li>
  
          </li>
        </ul>
      </nav>
    </header>
  );
};





