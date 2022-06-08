import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "../Cuerpo/ItemListContainer.css";

const listaProductos = [
  {
    id: 1,
    nombre: "Remera DC Hombre",
    precio: 8000,
    stock: 5,
    pictureUrl:
      "https://cdn.dcshoes.com.ar/media/catalog/product/cache/32ce18749ae42f152971731077de6e57/1/2/1222102131-21_1_1.jpg",
  },
  {
    id: 2,
    nombre: "Zapatillas Negras",
    precio: 17000,
    stock: 10,
    pictureUrl:
      "https://media.revistagq.com/photos/5fca0c51be088082688e9bf8/master/w_1280,h_854,c_limit/stussy-nike-air-force-1-negras-2.jpg",
  },
  {
    id: 3,
    nombre: "Pantalon Mujer",
    precio: 12000,
    stock: 5,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13693648-1000-1000/53412661-A.jpg?v=637898826577200000",
  },
  {
    id: 4,
    nombre: "Remera Mujer",
    precio: 5000,
    stock: 5,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13612572-1000-1000/53470502-A.jpg?v=637889344875930000",
  },
  {
    id: 5,
    nombre: "Riñonera Negra",
    precio: 6000,
    stock: 15,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13303895-1000-1000/07886901-a.jpg?v=637855400475030000",
  },
];

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(listaProductos);
      }, 2000);
    });
    promise
      .then((res) => {
        setProductos(res);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {!loading ? <h1>...Cargando</h1> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
