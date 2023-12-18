// Link reemplza el "Ancle" y con esto no recarga la informacion cada vez que cambio de enlance en el Navbar
// me permite hacer el SPA(Single Page APlication). Transforma mi app comun en una SPA

// y NavLink es casi igual que el Link, pero a nuestro componente le agrega una clase ".active"

import { NavLink, Link } from 'react-router-dom';  
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import '../styles/textos.css';


export const Navbar = () => {
 const [top, setTop] = useState(true);

 useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY === 0); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 return (
    <header className={top ? 'scroll-up' : 'scroll-down'}>
      <nav>
        <div>
            <Link to="/">
                <div className="logo"/>
            </Link>
        </div>
        <ul className='descripcionProducto'>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/Menu">Menú</NavLink>
          </li>
          <li>
            <NavLink to="/Reserva">Reservas</NavLink>
          </li>
          
          <li>
            <NavLink to="/Encuentranos">Encuéntranos</NavLink>
          </li>
  
        </ul>
      </nav>
    </header>
 );
};




// comentario para ver si puedo hacer el push