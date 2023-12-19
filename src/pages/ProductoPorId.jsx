// Sección por implementar a futuro en caso de requerir descripción de los productos

import { useParams } from "react-router-dom";

export const ProductoPorId = () => {
  const valorDinamico = useParams();

  console.log(valorDinamico.idProducto);

  return (
    <>
      <h1>Producto por ID</h1>
      <h3>El ID de tu producto es: {valorDinamico.idProducto}</h3>
    </>
  );
};
