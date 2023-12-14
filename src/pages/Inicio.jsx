// Aqui se redenriza todo lo que aparezca en inicio.

import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";

import "../styles/textos.css";

export const Inicio = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Banner />
        <Footer />


        
      </div>
    </>
  );
};


