// const Cart = () => {
// return(
//  <div className="cart">

//     <h2>Shopping Cart</h2>
//     <p>Tu Carro esta vacio.</p>


//  </div>

// )


// }

import React, { useState } from 'react';
import {pizzaCart} from '../pages/pizzas';  // Importa el array del carrito

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);  // Estado del carrito con la lista inicial

  // Función para aumentar la cantidad de una pizza
  const increaseQuantity = (id) => {
    setCart(cart.map((pizza) => 
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  // Función para disminuir la cantidad de una pizza
  const decreaseQuantity = (id) => {
    setCart(cart
      .map((pizza) => 
        pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      )
      .filter((pizza) => pizza.quantity > 0) // Filtrar solo después de mapear
    );
  };

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0).toFixed(2);
  };

  // Función de pago (por ahora no hace nada, pero es para el futuro)
  const handlePayment = () => {
    alert('Simulando la compra...');
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="cart-item">
              <img 
                src={pizza.imageUrl || "https://via.placeholder.com/100"} 
                alt={pizza.name} 
                style={{ width: "100px", height: "100px" }} 
              />
              <h3>{pizza.name}</h3>
              <p>Price: ${pizza.price}</p>
              <p>Quantity: {pizza.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => increaseQuantity(pizza.id)}>+</button>
                <button onClick={() => decreaseQuantity(pizza.id)} disabled={pizza.quantity <= 1}>-</button>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
          <button className="pay-button" onClick={handlePayment}>Pay</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
