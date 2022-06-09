import "../ItemCount/ItemCount.css";
import { useState } from "react";

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

  return (
    <div>
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
        <button type="button" className="btn btn-light border mt-3">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
