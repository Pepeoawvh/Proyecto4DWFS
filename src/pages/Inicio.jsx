// Aqui se redenriza todo lo que aparezca en inicio. 

import { Navbar } from '../components/Navbar'
import "../styles/Inicio.css"
import { Landing } from '../components/Landing'
import { Footer } from '../components/Footer'

 export const Inicio = () => {
  return (
    <>
    <div className="bannerJumbo">
    <Navbar />
    <Landing/>
    <Footer />
    

    </div>
    </>
  )
} 

