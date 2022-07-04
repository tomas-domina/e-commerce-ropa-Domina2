import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import Form from "./Form";
import DeleteIcon from "./DeleteIcon";

const Cart = () => {
  const { cart, emptyCart, totalPrice, deleteItem } = useCartContext();

  return (
    <div className="container-fluid">
      {cart.length < 1 ? (
        <div>
          <h1>El carrito esta vacio</h1>
          <Link to="/">
            <button className="btn btn-outline-primary mt-3">
              Volver al Inicio
            </button>
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
                <div className="borrarItem"></div>
                <button className="btnDel" onClick={() => deleteItem(item.id)}>
                  <DeleteIcon />
                </button>
              </li>
            ))}
          </ul>
          <div>
            <strong>TOTAL A PAGAR: </strong> ${totalPrice()}
          </div>

          <Form />

          <div>
            <button className="btn btn-danger mt-3 mb-3" onClick={emptyCart}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
