import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    getDocs(
      categoriaId
        ? query(queryCollection, where("categoria", "==", categoriaId))
        : queryCollection
    )
      .then((resp) =>
        setProductos(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [categoriaId]);

  return (
    <div style={{ textAlign: "center" }}>
      {loading ? <h1>...Cargando</h1> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
