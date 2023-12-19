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
          <div className="about">
        Ratita Gamer es una pizzería única que combina la mejor gastronomia con el entretenimiento de los videojuegos. Podrás disfrutar de una deliciosa pizza hecha con ingredientes frescos y de calidad, mientras te diviertes con tus amigos o familiares en las consolas y máquinas arcade que tenemos para ti.
        </div>

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
