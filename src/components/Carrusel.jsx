import React, { useState, useEffect } from 'react';
import '../styles/carrusel.css'

export const Carrusel = () => {
 const [imagenActiva, setImagenActiva] = useState(0);
// se declara un arreglo que contiene las imagenes que se usaran
 const imagenes = [
    '/public/img/Banners/PROMO1.png',
    '/public/img/Banners/PROMO2.png',
    '/public/img/Banners/PROMO3.png'
   ];
// HOOK useEffect
   useEffect(() => {
    const intervalo = setInterval(() => {
       setImagenActiva((imagenActiva + 1) % imagenes.length);
    }, 5000);
   
    return () => clearInterval(intervalo);
   }, [imagenActiva]);



 return (
 <div className="carrusel">
    {imagenes.map((imagen, index) => (
      <img
        key={imagen}
        src={imagen}
        alt="Imagen del carrusel"
        className={imagenActiva === index ? 'activa' : ''}  
      />
    ))}
 </div>
);
};  