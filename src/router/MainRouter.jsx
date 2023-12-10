import {Routes, Route,} from 'react-router-dom'
import { Inicio,SobreNosotros,Reserva,InicioSesion,Productos,Error404, ProductoPorId } from '../pages';


export const MainRouter = () => {
  return (
    <Routes>
     <Route exact path='/' element={<Inicio/>} />
     <Route exact path='/sobre-nosotros' element={<SobreNosotros/>} />
     <Route exact path='/Reserva' element={<Reserva/>} />
     <Route exact path='/inicio-sesion' element={<InicioSesion/>}  />
     <Route exact path='/productos' element={<Productos/>} />
     <Route exact path='/productos/:idProducto' element={<ProductoPorId/>} />
     <Route exact path='*' element={<Error404/>} />

     

     </Routes>
  
     
  )
}
