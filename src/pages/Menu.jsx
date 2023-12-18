import React from "react";
import { Navbar } from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Footer } from "../components/Footer";
import data from "../assets/productos.json";
import "../styles/ProductCard.css"


export const Menu = () => {
  console.log(data)
  return (
    <>
      <div className="menu">
        <Navbar />
       <main className="card-grid">
        {data.map((producto, index)=> {
          return(
            <ProductCard key={index} {...producto}/>
          )
        })}
      </main>
        <Footer />
      </div>
    </>
  );
};
