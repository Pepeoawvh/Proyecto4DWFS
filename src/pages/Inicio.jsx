// Aqui se redenriza todo lo que aparezca en inicio.

import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import "../styles/backgrounds.css";
import "../styles/textos.css";

export const Inicio = () => {
  return (
    <>
      <div className="bannerJumbo">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </>
  );
};
