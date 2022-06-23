import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, emptyCart, totalPrice, deleteItem } = useCartContext();

  return (
    <div className="container-fluid">
      {cart.length < 1 ? (
        <div>
          <h1>El carrito esta vacio</h1>
          <Link to="/">
            <button>Volver al Inicio</button>
          </Link>
        </div>
      ) : (
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
                <div className="borrarItem">
                  <button
                    className="btnDel"
                    onClick={() => deleteItem(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-tabler-x"
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="#ff2825"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <strong>TOTAL A PAGAR: </strong> ${totalPrice()}
          </div>

          <div>
            <button onClick={emptyCart}>Vaciar Carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
