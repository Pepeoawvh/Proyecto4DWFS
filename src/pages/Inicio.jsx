// Aqui se redenriza todo lo que aparezca en inicio. 

import { Navbar } from '../components/Navbar'
import "../components/Inicio.css"
import { Pizzas } from '../components/Pizzas'

 export const Inicio = () => {
  return (
    <>
    <div className="bannerJumbo">
    <Navbar />
    <Pizzas/>
    

    </div>
    </>
  )
} 

