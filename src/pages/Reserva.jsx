// import React from 'react'
import { Formulario } from "../components/Formulario";
import { Navbar } from "../components/Navbar";
import "../styles/Reserva.css";

export const Reserva = () => {
  return (
    <>
      <Navbar />

      <div className="jumboForm">
        <div className="jumboFormContainer">
          <Formulario />
        </div>
        <div className="jumboFormSplit"> </div>
      </div>
    </>
  );
};
