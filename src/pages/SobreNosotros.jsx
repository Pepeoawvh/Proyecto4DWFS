import { Navbar } from "../components/Navbar";
import Map from "../components/Maps";
import { Footer } from "../components/Footer";

export const SobreNosotros = () => {
  return (
    <><div className="sobrenosotros">
     <Navbar />
      <div className="containermap">
        <div className="left-section">
          <h2>Encuéntranos</h2>
          <p>Información adicional</p>
          <a href="https://api.whatsapp.com/send?phone=TUNUMERODEWHATSAPP" target="_blank" className="whatsapp-button">Contactar por WhatsApp</a>
        </div>
        <div className="right-section">
          <Map /> {/* Aquí deberías renderizar tu componente de Map */}
        </div>
      </div>
      <Footer />
      </div>
    </>
    
  );
};
