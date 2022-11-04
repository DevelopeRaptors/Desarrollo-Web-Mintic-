import React from "react";
import producto from '../Img/icono-producto.jpg';

export default class ListaProductos extends React.Component{
    render(){
        return(
            <div class="populares__contenido">
                <div class="populares__card">
                    <img className='populares__card___imagen' src={producto} alt={"logo"}></img>
                    <div class="populares__card___base">
                        <div class="populares__card___header">
                            <h5 class="populares__card___titulo">Producto 1</h5>
                        </div>
                        <div class="populares__card___descripcion">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut.
                            </p>                           
                        </div>
                        <div>
                            <p>Precio: $100</p>
                            <p>Inventario: 15 und</p>
                            <p>Productos restantes: 15</p>
                        </div>
                    </div>
                </div>
                <div class="populares__card">
                    <img className='populares__card___imagen' src={producto} alt={"logo"}></img>
                    <div class="populares__card___base">
                        <div class="populares__card___header">
                            <h5 class="populares__card___titulo">Producto 2</h5>
                        </div>
                        <div class="populares__card___descripcion">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut.
                            </p>                            
                        </div>
                        <div>
                            <p>Precio: $500</p>
                            <p>Inventario: 25 und</p>
                            <p>Productos restantes: 25</p>
                        </div>
                        
                    </div>
                </div>
                <div class="populares__card">
                    <img className='populares__card___imagen' src={producto} alt={"logo"}></img>
                    <div class="populares__card___base">
                        <div class="populares__card___header">
                            <h5 class="populares__card___titulo">Producto 3</h5>
                        </div>
                        <div class="populares__card___descripcion">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut.
                            </p>                           
                        </div>
                        <div>
                            <p>Precio: $350</p>
                            <p>Inventario: 5 und</p>
                            <p>Productos restantes: 5</p>
                        </div>
                    </div>
                </div>
                <div class="populares__card">
                    <img className='populares__card___imagen' src={producto} alt={"logo"}></img>
                    <div class="populares__card___base">
                        <div class="populares__card___header">
                            <h5 class="populares__card___titulo">Producto 4</h5>
                        </div>
                        <div class="populares__card___descripcion">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut.</p>                           
                        </div>
                        <div>
                            <p>Precio: $10</p>
                            <p>Inventario: 5 und</p>
                            <p>Productos restantes: 5</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}