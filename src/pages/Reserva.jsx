// import React from 'react'
import { Formulario } from "../components/Formulario";
import { Navbar } from "../components/Navbar";
import "../styles/Reserva.css";
import { Footer } from "../components/Footer";

export const Reserva = () => {
  return (
    <>
    <div className="reserva">
      <Navbar />

      <div className="jumboForm">
        <div className="jumboFormContainer">
          <Formulario />
        </div>
        <div className="jumboFormSplit"> </div>
      </div>
      <Footer />
      </div>

    </>
  );
};
