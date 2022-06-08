import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "../Cuerpo/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1}></ItemCount>
      <ItemList></ItemList>
    </div>
  );
};

export default ItemListContainer;
