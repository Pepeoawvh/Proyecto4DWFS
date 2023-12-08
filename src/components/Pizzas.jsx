
import React from 'react';
import './Pizzas.css'

 export const Pizzas = () => {
 return (

    <section className='cards'>
      <div className="pizza1">

      <h2 className='TituloCard'>PIZZA PEPPERONI XBOX</h2> 
      <img src="" className='imagen1' alt="" />
      <p>Ingredientes: Queso Mozarella, Salsa de Tomate y Pepperoni Americano</p>
      <h1 className='precio'>Precio: $9.990</h1>
      <button className='boton1'>Ver más</button>
    </div>

    <div className="pizza2">

      <h2 className='TituloCard'>PIZZA VEGAN NINTENDO</h2>
      <img src="" className='imagen2' alt="" />
      <p>Ingredientes: Queso Mozarella, Salsa de Tomate, Choclo, Pimentón</p>
      <h1 className='precio'>Precio: $13.990</h1>
      <button className='boton2'>Ver más</button>
    </div>

    <div className="pizza3">
      <h2 className='TituloCard'>PIZZA ITALIAN PS4</h2>
      <img src="" className='imagen3' alt="" />
      <p>Ingredientes: Queso Mozarella, Salsa de Tomate, Jamón, Tomate</p>
      <h1 className='precio'>Precio: $12.990</h1>
      <button className='boton3'>Ver más</button>
    </div>

    </section>

 );
};


 

