import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import logo from '../Img/logo.png';

const Nav = () => {
    return (
        <>
        <div className="container">
            <img className="logo" src={logo} alt={"logo"}></img>

            <nav >
                <ul >
                    <li >
                        <Link as={Link} to="/ingresarProducto">Ingresar Productos</Link>
                    </li>

                    <li >
                        <Link as={Link} to="/listaProductos">Lista Productos</Link>
                    </li>

                    <li >
                        <Link as={Link} to="/ventasRealizadas">Ventas</Link>
                    </li>

                    <li >
                        <Link as={Link} to="/selecionarProductos">Seleccionar productos</Link>
                    </li>

                    <li>
                        <Link  as={Link} to="/carritoCompras">Carrito</Link>
                    </li>
                 </ul>
            </nav>
        </div>

        <section>
            <Outlet></Outlet>
        </section>
        </>
    )
}

export default Nav;