import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCartContext();

  return (
    <div className="container-fluid">
      <div>
        <ul className="card">
          {cart.map((item) => (
            <li className="li-carrito" key={item.id}>
              <div>
                <img
                  className="card-img-top w-15 img-carrito"
                  src={item.pictureUrl}
                  alt=""
                />
              </div>
              <div>
                <div className="producto-body-1">
                  {" "}
                  <strong> Producto:</strong> {item.nombre}
                </div>
                <div className="producto-body-2">
                  <strong>Precio p/Unidad:</strong> ${item.precio}
                </div>
                <div className="producto-body-3">
                  {" "}
                  <strong>Cantidad:</strong> {item.cantidad}
                </div>
                <div>
                  {" "}
                  <strong>Total:</strong> ${item.precio * item.cantidad}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={removeFromCart}>Vaciar Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
