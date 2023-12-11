import React, { useState } from "react";
// import React from "react";
import { firestoreDB } from "../firebase/config";
import '../styles/Formulario.css'
import '../styles/textos.css'

export const Formulario = () => {


  // Creamos un estado para guardar los datos del formulario
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    personas: "",
    fecha: "",
    hora: "",
  });

    

  // Creamos una función para manejar el cambio de los inputs
  const handleChange = (event) => {
    // Actualizamos el estado con el valor del input
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  // Creamos una función, proceso asincrono, para manejar el envío del formulario
  const handleSubmit = async (event) => {
    // Evitamos el comportamiento por defecto del formulario
    event.preventDefault();
    // Intentar conectarse a la colección de bbdd, y agrega nuevo doc
    try {
      await firestoreDB.collection("reservas").add(datos)
      alert("Reserva guardada")
    } catch (error){
      alert("No se pudo guardar la reserva")
      console.log(error)
    }
    
  };

  // aqui va el nuevo codigo de limitación de horario de reserva 

  const esHoraReservable = (hora) => {
    // Define el horario de reserva permitido aquí.
    // Por ejemplo, si solo queremos permitir reservas entre las 14:00 y las 22:00:
    const horarioInicio = 14;
    const horarioFin = 22;
    const [horaActual, minutosActual] = hora.split(":");
    const horaInt = parseInt(horaActual);
    const minutosInt = parseInt(minutosActual);
    if (horaInt >= horarioInicio && horaInt <= horarioFin) {
      return true;
    }
    return false;
 };

 const handleTimeChange = (event) => {
    const horaSeleccionada = event.target.value;
    if (esHoraReservable(horaSeleccionada)) {
      setDatos({
        ...datos,
        [event.target.name]: horaSeleccionada,
      });
    } else {
      alert("Lo sentimos, esta hora no está disponible para reservas.");
    }
 };

//   aqui termina el nuevo codigo 



  return (
    <div className="formContainer">
      {/* <h1>Formulario</h1> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
        />
       
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={datos.telefono}
          onChange={handleChange}
        />
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={datos.correo}
          onChange={handleChange}
        />
        <label htmlFor="personas">Cantidad de personas:</label>
        <input
          type="number"
          id="personas"
          name="personas"
          value={datos.personas}
          onChange={handleChange}
        />
         <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={datos.fecha}
          onChange={handleChange}
        />
        
         <label htmlFor="hora">Hora: (14:00 hrs hasta las 22:00 hrs)</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={datos.hora}
          onChange={handleTimeChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};


export default Formulario;

