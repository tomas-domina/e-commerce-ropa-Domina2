import { useEffect, useState } from "react";
import { listaProductos } from "../ItemList/ItemListContainer";
import ItemDetail from "./ItemDetail";

const getItem = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(listaProductos.find((prod) => prod.id === id));
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getItem(2)
      .then((resp) => setProducto(resp))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <ItemDetail producto={producto}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
