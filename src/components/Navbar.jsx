// Link reemplza el "Ancle" y con esto no recarga la informacion cada vez que cambio de enlance en el Navbar
// me permite hacer el SPA(Single Page APlication). Transforma mi app comun en una SPA

// y NavLink es casi igual que el Link, pero a nuestro componente le agrega una clase ".active"

import { NavLink, Link } from 'react-router-dom'  
import '../styles/Navbar.css'
export const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='logo'>
            <Link to="/">
                <div src="" className="logo" alt=""/>
            </Link>
        </div>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/productos">LaCarta</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
          <li>
          <li>
            <NavLink to="/sobre-nosotros">Nosotros</NavLink>
          </li>
            <NavLink to="/Inicio-Sesion">Inicio Sesión</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};





