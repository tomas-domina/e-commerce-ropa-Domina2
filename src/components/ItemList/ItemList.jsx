import React from "react";
import Item from "./Item";
import "../ItemList/ItemList.css";
import { memo } from "react";

const ItemList = memo(({ products }) => {
  return (
    <div className="itemGrid">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
});

export default ItemList;
