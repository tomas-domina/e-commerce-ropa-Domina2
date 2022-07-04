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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    getDocs(
      categoryId
        ? query(queryCollection, where("categoria", "==", categoryId))
        : queryCollection
    )
      .then((resp) =>
        setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [categoryId]);

  return (
    <div style={{ textAlign: "center" }}>
      {loading ? <h1>...Cargando</h1> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
