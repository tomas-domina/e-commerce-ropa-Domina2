import "../ItemCount/ItemCount.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd }) {
  let [count, setCount] = useState(initial);

  function addItem() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function deleteItem() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  const [display, setDisplay] = useState(true);

  const finishBuying = () => {
    onAdd(count);
    setDisplay(false);
  };

  return (
    <div className="item-count">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={deleteItem} type="button" className="btn btn-dark">
          -
        </button>
        <button type="button" className="btn btn-light border">
          {count}
        </button>
        <button onClick={addItem} type="button" className="btn btn-dark">
          +
        </button>
      </div>
      <div>
        {display ? (
          <button className="btn btn-outline-dark mt-4" onClick={finishBuying}>
            Agregar al Carrito
          </button>
        ) : (
          <div>
            <p className="mt-5 text-success">
              <strong>Se agregaron {count} productos al carrito</strong>
            </p>
            <Link to="/cart">
              <button className="btn btn-outline-dark border mt-3 me-3">
                Finalizar Compra
              </button>
            </Link>

            <Link to="/">
              <button className="btn btn-outline-dark border mt-3">
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
