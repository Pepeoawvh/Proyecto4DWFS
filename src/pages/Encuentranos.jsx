import { Navbar } from "../components/Navbar";
import Map from "../components/Maps";
import { Footer } from "../components/Footer";
import "../styles/map.css";
 
export const Encuentranos = () => {
  return (
    <>
     <div className="sobrenosotros">
     <Navbar />
      <div className="containermap">
        <div className="left-section">
          <p className="titulo1x"> ENCUENTRANOS/> </p>
 
          <p className="descripcionp1">• Encuéntranos en Av. La Plaza 13405, Las Condes</p>
          <p className="descripcionp1">• Dudas contáctanos directamente por Whatsapp</p>
          <button className="whatsapp-button">
  <a href="https://api.whatsapp.com/send?phone=56975467484" target="_blank">
    <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
  </a>
</button>        </div>
        <div className="right-section">
          <Map />
        </div>
      </div>
      <Footer />
      </div>
    </>
   
  );
};
 