import React from "react";
import Item from "./Item";
import "../ItemList/ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemGrid">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
