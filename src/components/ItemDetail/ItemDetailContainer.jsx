import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listaProductos } from "../ItemList/ItemListContainer";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

const getItem = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(listaProductos.find((prod) => prod.id === id));
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((resp) => setProducto(resp))
      .catch((err) => console.log(err));
  });

  return (
    <div className="card-detail">
      <ItemDetail producto={producto}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
