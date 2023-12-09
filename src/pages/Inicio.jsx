// Aqui se redenriza todo lo que aparezca en inicio. 

import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import "../styles/Inicio.css"
import { Footer } from '../components/Footer'


 export const Inicio = () => {
  return (
    <>
    <div className="bannerJumbo">
    <Navbar />
    <Banner/>
    <Footer />
    </div>
    </>
  )
} 

