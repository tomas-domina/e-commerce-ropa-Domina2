import { useState } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

const ItemList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Remera Negra",
      description: "remera negra de calidad",
      price: "$7000",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_799929-MLA48792938332_012022-O.webp",
    },
    {
      id: 2,
      title: "Zapatillas Negras",
      description: "Zapatillas Negras de calidad",
      price: "$20000",
      pictureUrl:
        "https://media.revistagq.com/photos/5fca0c51be088082688e9bf8/master/w_1280,h_854,c_limit/stussy-nike-air-force-1-negras-2.jpg",
    },
    {
      id: 3,
      title: "Pantalon Mujer",
      description: "pantalon de calidad",
      price: "$12000",
      pictureUrl:
        "https://newsport.vteximg.com.br/arquivos/ids/13693648-1000-1000/53412661-A.jpg?v=637898826577200000",
    },
    {
      id: 4,
      title: "Remera Mujer",
      description: "remera de calidad",
      price: "$5000",
      pictureUrl:
        "https://newsport.vteximg.com.br/arquivos/ids/13612572-1000-1000/53470502-A.jpg?v=637889344875930000",
    },
    {
      id: 5,
      title: "Mochila",
      description: "Mochila de calidad",
      price: "$19000",
      pictureUrl:
        "https://newsport.vteximg.com.br/arquivos/ids/13325794-1000-1000/NH3668XMH74-A.jpg?v=637859716943130000",
    },
  ]);

  return (
    <div className={styles.itemGrid}>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            img={item.pictureUrl}
            price={item.price}
          ></Item>
        );
      })}
    </div>
  );
};

export default ItemList;
