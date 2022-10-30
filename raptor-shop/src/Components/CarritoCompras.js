import React from 'react';
import producto from '../Img/icono-producto.jpg';
import '../Styles/CarritoCompras.css';

const CarritoCompras = () => {
    return (
        <div class="CartContainer">
            <p>Carrito</p>
            <div class="Header">
                <h3 class="Heading">Carrito</h3>
                <h5 class="Action">Remover todo</h5>
            </div>
            <div class="Cart-Items">
                <div class="image-box">
                <img className='populares__card___imagen' src={producto} alt={"logo"} height="60px"></img>
                </div>
                <div class="about">
                    <h2 class="title">Producto 1</h2>
                    <h3 class="subtitle">Descripción</h3>
                </div>
                <div class="counter">
                    <div class="btn">+</div>
                    <div class="count">2</div>
                    <div class="btn">-</div>
                </div>
                <div class="prices">
                    <div class="amount">$2.99</div>
                    <div class="save"><u>Guardar para después</u></div>
                    <div class="remove"><u>Remover</u></div>
                </div>
            </div>
            <div class="Cart-Items pad">
                <div class="image-box">
                <img className='populares__card___imagen' src={producto} alt={"logo"} height="60px"></img>
                </div>
                <div class="about">
                    <h2 class="title">Producto 2</h2>
                    <h3 class="subtitle">Descripción</h3>
                </div>
                <div class="counter">
                    <div class="btn">+</div>
                    <div class="count">1</div>
                    <div class="btn">-</div>
                </div>
                <div class="prices">
                    <div class="amount">$3.19</div>
                    <div class="save"><u>Guardar para después</u></div>
                    <div class="remove"><u>Remover</u></div>
                </div>
            </div>
            <div class="checkout">
			<div class="total">
				<div>
					<div class="Subtotal">Sub-Total</div>
					<div class="items">2 items</div>
				</div>
				<div class="total-amount">$6.18</div>
			</div>
			<button class="button">Pagar</button>
		</div>
        </div>
    )
}

export default CarritoCompras