import React from "react";
import Item from "./Item";
import "../ItemList/ItemList.css";
import { memo } from "react";

const ItemList = memo(({ productos }) => {
  return (
    <div className="itemGrid">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
});

export default ItemList;
