


const ProductCard = ({color, nombre, img, ingredientes, precio}) => {
return(
    <div class="card-container" style={{/*backgroundColor: color*/}}>
        <div class="card-title">
        <h1>{nombre}</h1>
        </div>
        <div class="card-img" style={{backgroundImage:`url(/img/Productos/${img})`}}>
        </div>
        <div class="card-content">

        <p>{ingredientes.map(ingrediente => (
            <span>{ingrediente}</span>
        ))}</p>
         <h3>Precio: ${precio}</h3>
    <button>Ver más</button>

        </div>
    </div>
)

}

export default ProductCard