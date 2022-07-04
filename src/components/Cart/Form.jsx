import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const initialOrder = {
    name: "",
    lastName: "",
    tel: "",
    email: "",
    email2: "",
  };

  const [order, setOrder] = useState(initialOrder);
  const captureInput = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const [orderId, setOrderId] = useState(false);
  const saveData = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((resp) => setOrderId(resp.id));
    setOrder({ ...initialOrder });
  };

  return (
    <div>
      {!orderId ? (
        <div className="asdasdasd">
          <form onSubmit={saveData} className="card p-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nombres
              </label>
              <input
                onChange={captureInput}
                value={order.name}
                name="name"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Apellido
              </label>
              <input
                onChange={captureInput}
                value={order.lastName}
                name="lastName"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Telefono
              </label>
              <input
                onChange={captureInput}
                value={order.tel}
                name="tel"
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                E-Mail
              </label>
              <input
                onChange={captureInput}
                value={order.email}
                name="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Confirmar E-Mail
              </label>
              <input
                onChange={captureInput}
                value={order.email2}
                name="email2"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div>
              {order.email === order.email2 ? (
                <div>
                  <button className="btn btn-success mt-3">
                    Finalizar Compra
                  </button>
                </div>
              ) : (
                <div>
                  <strong className="text-danger">
                    Los E-Mails no coinciden
                  </strong>
                </div>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div>
          <p className="mt-3">
            Compra Realizada, su ID de compra es <strong>{orderId}</strong>
          </p>
          <Link to="/">
            <div>
              <button className="btn btn-success mt-3">Volver al Inicio</button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Form;
