import {Routes, Route,} from 'react-router-dom'
import { Inicio,SobreNosotros,Reserva,InicioSesion,Menu,Error404, ProductoPorId } from '../pages';


export const MainRouter = () => {
  return (
    <Routes>
     <Route exact path='/' element={<Inicio/>} />
     <Route exact path='/sobre-nosotros' element={<SobreNosotros/>} />
     <Route exact path='/Reserva' element={<Reserva/>} />
     <Route exact path='/inicio-sesion' element={<InicioSesion/>}  />
     <Route exact path='/Menu' element={<Menu/>} />
     <Route exact path='/Menu/:idProducto' element={<ProductoPorId/>} />
     <Route exact path='*' element={<Error404/>} />

     

     </Routes>
  
     
  )
}
