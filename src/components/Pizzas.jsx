
import React from 'react';
import '../styles/Pizzas.css'
import '../styles/textos.css'


 export const Pizzas = () => {
  
 return (

    <section className='cards'>
      <div className="pizza1">

      <h2 className='tituloCard'>PIZZA PEPPERONI XBOX</h2> 
      <div className='imagen1'/>
      <p>Ingredientes: Queso Mozarella, Salsa de Tomates y Pepperoni Americano</p>
      <h1 className='precio'>Precio: $9.990</h1>
      <button className='boton1'>Ver más</button>
    </div>

    <div className="pizza2">

      <h2 className='tituloCard'>PIZZA VEGAN NINTENDO</h2>
      <div className='imagen2'/>
      <p>Ingredientes: Queso Mozarella, Salsa de Tomates, Choclo, Pimentón</p>
      <h1 className='precio'>Precio: $13.990</h1>
      <button className='boton2'>Ver más</button>
    </div>

    <div className="pizza3">
      <h2 className='tituloCard'>PIZZA ITALIAN PS4</h2>
      <div className='imagen3 '/>
      <p>Ingredientes: Queso Mozarella, Salsa de Tomate, Jamón, Tomate</p>
      <h1 className='precio'>Precio: $12.990</h1>
      <button className='boton3'>Ver más</button>
    </div>

    </section>

 );
};


 

