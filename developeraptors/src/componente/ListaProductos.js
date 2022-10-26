import React from "react";
import producto from '../img-vistas/icono-producto.jpg';

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
                        <button> COMPRAR
                        </button>
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
                        <button class="botones-comprar"> COMPRAR
                        </button>
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
                        <button> COMPRAR
                        </button>
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
                        <button> COMPRAR
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}