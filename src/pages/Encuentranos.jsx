import { Navbar } from "../components/Navbar";
import Map from "../components/Maps";
import { Footer } from "../components/Footer";
import "../styles/map.css";

export const Encuentranos = () => {
  return (
    <>
      <div className="sobreNosotros">
        <Navbar />
        <div className="containerMap">
          <div className="leftSection">
            <p className="titulo1x"> ENCUENTRANOS/ </p>
            <p className="descripcionP1">
             Estamos en Av. La Plaza 13405, Las Condes
            </p>
            <p className="descripcionP1">
              ¿Tienes dudas? ¡contáctanos directamente!
            </p>
            <button className="whatsapp">
              <a
                href="https://api.whatsapp.com/send?phone=56975467484"
                target="_blank"
              >
                <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
              </a>
            </button>{" "}
          </div>
          <div className="rightSection">
            <Map />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
