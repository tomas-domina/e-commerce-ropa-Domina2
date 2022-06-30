import "../ItemCount/ItemCount.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd }) {
  let [count, setCount] = useState(initial);

  function agregar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function quitar() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  const [mostrar, setMostrar] = useState(true);

  const finalizar = () => {
    onAdd(count);
    setMostrar(false);
  };

  return (
    <div className="item-count">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={quitar} type="button" className="btn btn-dark">
          -
        </button>
        <button type="button" className="btn btn-light border">
          {count}
        </button>
        <button onClick={agregar} type="button" className="btn btn-dark">
          +
        </button>
      </div>
      <div>
        {mostrar ? (
          <button className="btn btn-light border mt-3" onClick={finalizar}>
            Agregar al Carrito
          </button>
        ) : (
          <div>
            <p className="mt-5 text-success">
              Se agregaron {count} productos al carrito
            </p>
            <Link to="/cart">
              <button className="btn btn-light border mt-3 me-3">
                Finalizar Compra
              </button>
            </Link>

            <Link to="/">
              <button className="btn btn-ligth border mt-3">
                Seguir Comprando
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCount;
