import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import './Styles/ListaProductos.css';

//Se importan los componentes creados
import Nav from './Components/Nav';
import IngresarProducto from './Components/IngresarProducto';
import ListaProductos from './Components/ListaProductos';
import VentasRealizadas from './Components/VentasRealizadas';
import SelecionarProductos from './Components/SelecionarProductos';
import CarritoCompras from './Components/CarritoCompras';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Nav/> }>
            <Route path='ingresarProducto' element={ <IngresarProducto/> }/>
            <Route path='listaProductos' element={ <ListaProductos/> }/>
            <Route path='ventasRealizadas' element={ <VentasRealizadas/> }/>
            <Route path='selecionarProductos' element={ <SelecionarProductos/> }/>
            <Route path='carritoCompras' element={ <CarritoCompras/> }/>

            <Route path='*' element={ <Navigate replace to="/"/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;