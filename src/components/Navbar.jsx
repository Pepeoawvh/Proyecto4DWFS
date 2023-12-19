// Link reemplza el "Ancle" y con esto no recarga la informacion cada vez que cambio de enlance en el Navbar
// me permite hacer el SPA(Single Page APlication). Transforma mi app comun en una SPA

// y NavLink es casi igual que el Link, pero a nuestro componente le agrega una clase ".active"

import { NavLink, Link } from 'react-router-dom';  
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import useTrigger from './useTrigger'

export const Navbar = () => {
 const [top, setTop] = useState(true);
  useTrigger('scroll', () => {
  setTop(window.scrollY === 0) 
 })
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
                <div className="logo co"/>
            </Link>
        </div>
        <div className='navText'>
          <div className= 'navItem'>
            <NavLink to="/">Inicio</NavLink>
          </div>
          <div className= 'navItem'>
            <NavLink to="/Menu">Menú</NavLink>
          </div>
          <div className= 'navItem'>
            <NavLink to="/Reserva">Reservas</NavLink>
          </div>
          
          <div className= 'navItem encuentranos'>
            <NavLink to="/Encuentranos">Encuéntranos</NavLink>
          </div>
        </div>
      </nav>
    </header>
 );
};




// comentario para ver si puedo hacer el push