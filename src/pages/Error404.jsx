import React from "react";
import "../styles/404.css";

export const Error404 = () => {
  return (
    <div className="container404">
      <h1 className="parrafo404">Error 404 - Vacio de Pizza</h1>
      <a href="/">
        <h2 className="volver404">Volver a inicio</h2>
      </a>
    </div>
  );
};
