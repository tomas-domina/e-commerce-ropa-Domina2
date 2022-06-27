import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [bool, setBool] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryItem = doc(db, "items", id);
    getDoc(queryItem)
      .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err));
  }, [bool]);

  return (
    <div className="card-detail">
      <ItemDetail producto={producto}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
