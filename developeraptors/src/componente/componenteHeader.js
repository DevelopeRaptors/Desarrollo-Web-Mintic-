import React from 'react';

import logo from '../img-vistas/logo.png';
export default class ComponenteHeader extends React.Component{
    render(){
        return(
            <div className='cabecera'>
                <img className='logo' src={logo} alt={"logo"}></img>
                <nav class="menu">
                    <ul class="menu-lista">
                        <li class="menu-items"><a class="menu-link" href="#inicio">Ingresar Productos</a></li>
                        <li class="menu-items"><a class="menu-link" id="activo" href="#recetas">Lista Productos</a></li>
                        <li class="menu-items"><a class="menu-link" href="#quienesSomos">Modificar producto</a></li>
                        <li class="menu-items"><a class="menu-link" href="#contacto">Carrito</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
};
