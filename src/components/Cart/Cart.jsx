import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

import {
  addDoc,
  getFirestore,
  collection,
  doc,
  updateDoc,
  query,
  where,
  documentId,
  writeBatch,
  getDocs,
} from "firebase/firestore";

const Cart = () => {
  const { cart, emptyCart, totalPrice, deleteItem } = useCartContext();

  const generateOrder = async (e) => {
    e.preventDefault();
    let order = {};

    order.buyer = { name: "tomas", email: "t@gmail.com", phone: "12345678" };
    order.total = totalPrice();

    order.items = cart.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.nombre;
      const price = cartItem.precio * cartItem.cantidad;

      return { id, name, price };
    });

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((resp) =>
      alert(`Compra realizada, su número de orden es: ${resp.id}`)
    );

    const queryCollectionStock = collection(db, "items");

    const queryUpdateStock = query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );
    const batch = writeBatch(db);

    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cart.find((item) => item.id === res.id).cantidad,
          })
        )
      )
      .finally(() => console.log("Compra Realizada"));

    batch.commit();
  };

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
              </li>
            ))}
          </ul>
          <div>
            <strong>TOTAL A PAGAR: </strong> ${totalPrice()}
          </div>

          <div>
            <button className="btn btn-success mt-3" onClick={generateOrder}>
              Finalizar Compra
            </button>
          </div>

          <div>
            <button className="btn btn-danger mt-3" onClick={emptyCart}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
