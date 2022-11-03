import React from 'react';
import producto from '../Img/icono-producto.jpg';
import '../Styles/IngresarProducto.css';

const IngresarProducto = () => {
    return (
        <div>
            <div class="container">
                <div class="productos">
                    <p class="listaproductos">Producto 1</p>
                    <p class="listaproductos">Producto 2</p>
                    <p class="listaproductos">Producto 3</p>

                    <button class="btn">Agregar producto</button>
                </div>

                <div class="informacion">
                    <img class="imagen" src={producto}></img>
                    
                    <form class="formulario">

                        <label class="titulo-info">Nombre</label>
                        <input type="text" class="cajon-info"></input>

                        <label class="titulo-info">Descripción</label>
                        <textarea type="text" class="area-info"></textarea>

                        <label class="titulo-info">Precio</label>
                        <input type="text" class="cajon-info"></input>

                        <label class="titulo-info">Stock</label>
                        <input type="text" class="cajon-info"></input>

                        <button class="btn">Guardar información</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default IngresarProducto