import React, { useState } from "react";
// import React from "react";
import { firestoreDB } from "../firebase/config";
import '../styles/Formulario.css'

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
    }
    
  };

  // aqui va el nuevo codigo de limitación de horario de reserva 

  const esHoraReservable = (hora) => {
   
    const horarioInicio = 14;
    const horarioFin = 21;
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
          placeholder="Ej: Juan Gabriel"
        />
       
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={datos.telefono}
          onChange={handleChange}
          placeholder="Ej: 9 4321 5678"
        />
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={datos.correo}
          onChange={handleChange}
          placeholder="Ej: email@ratagamer.cl"
        />
        <label htmlFor="personas">Cantidad de personas:</label>
        <input
          type="number"
          id="personas"
          name="personas"
          min="2"
          max="6"
          value={datos.personas}
          onChange={handleChange}
          placeholder="Ej: 5"

        />
         <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={datos.fecha}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          
          
        />
        

         <label htmlFor="hora" className="horat">Horarios: (Disponible de 14:00 hrs hasta 21:00 hrs)</label>
       
       <select id="hora"

          name="hora"
          value={datos.hora}
          onChange={handleTimeChange} 
          class="hora-select">
                <option>14:00hrs</option>
                <option>15:00hrs</option>
                <option>16:00hrs</option>
                <option>17:00hrs</option>
                <option>18:00hrs</option>
                <option>19:00hrs</option>
                <option>20:00hrs</option>
                <option>21:00hrs</option>
               
       </select>

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};


export default Formulario;