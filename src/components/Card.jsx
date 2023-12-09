import '../styles/banner.css'


const Card = () => {
    return (
        <div className="card">
           <h2 className='tituloCard'>PIZZA PEPPERONI XBOX</h2> 
      <div className='imagen1'/>
      <p>Ingredientes: Queso Mozarella, Salsa de Tomates y Pepperoni Americano</p>
      <h1 className='precio'>Precio: $9.990</h1>
      <button className='boton1'>Ver más</button>
        </div>
    );
};

export default Card;