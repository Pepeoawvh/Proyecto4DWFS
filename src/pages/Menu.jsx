import React from "react";
import { Navbar } from "../components/Navbar";
import { Pizzas } from "../components/menu";
import { Footer } from "../components/Footer";
export const Menu = () => {
  return (
    <>
      <div className="menu">
        <Navbar />
        <Pizzas />
        <Footer />
      </div>
    </>
  );
};
