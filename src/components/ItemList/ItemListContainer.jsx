import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const listaProductos = [
  {
    id: "1",
    nombre: "Remera Azul DC Hombre",
    precio: 8000,
    stock: 5,
    pictureUrl:
      "https://cdn.dcshoes.com.ar/media/catalog/product/cache/32ce18749ae42f152971731077de6e57/1/2/1222102131-21_1_1.jpg",
    categoria: "hombre",
    description: "Producto: Remera, Marca: DC",
  },
  {
    id: "2",
    nombre: "Zapatillas NIKE Air Force 1 Negras",
    precio: 17000,
    stock: 10,
    pictureUrl:
      "https://media.revistagq.com/photos/5fca0c51be088082688e9bf8/master/w_1280,h_854,c_limit/stussy-nike-air-force-1-negras-2.jpg",
    categoria: "hombre",
    description: "Producto: Calzado, Marca: NIKE",
  },
  {
    id: "3",
    nombre: "Pantalon PUMA Floreado Mujer",
    precio: 12000,
    stock: 5,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13693648-1000-1000/53412661-A.jpg?v=637898826577200000",
    categoria: "mujer",
    description: "Producto: Pantalon, Marca: PUMA",
  },
  {
    id: "4",
    nombre: "Remera Blanca PUMA Mujer",
    precio: 5000,
    stock: 5,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13612572-1000-1000/53470502-A.jpg?v=637889344875930000",
    categoria: "mujer",
    description: "Producto: Remera, Marca: PUMA",
  },
  {
    id: "5",
    nombre: "Riñonera PUMA Negra",
    precio: 6000,
    stock: 15,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13303895-1000-1000/07886901-a.jpg?v=637855400475030000",
    categoria: "accesorios",
    description: "Producto: Riñonera, Marca: PUMA",
  },
  {
    id: "6",
    nombre: "Campera Hombre The Simpsons",
    precio: 20000,
    stock: 4,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/10255719-1000-1000/HA5814-A.jpg?v=637684306882500000",
    categoria: "hombre",
    description: "Producto: Campera, Marca: ADIDAS",
  },
  {
    id: "7",
    nombre: "Pantalon Fila Boldface Hombre",
    precio: 7000,
    stock: 9,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/7912261-1000-1000/HT508017160-A.jpg?v=637610885096730000",
    categoria: "hombre",
    description: "Producto: Pantalon, Marca: FILA",
  },
  {
    id: "8",
    nombre: "Buzo Canguro Vans Classic",
    precio: 13000,
    stock: 12,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13370246-1000-1000/VNA4A5NY28-a.jpg?v=637866628880700000",
    categoria: "hombre",
    description: "Producto: Buzo, Marca: VANS",
  },
  {
    id: "9",
    nombre: "Zapatillas Fila Sandenal Mujer",
    precio: 20000,
    stock: 8,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13721366-1000-1000/5RM01747122-A.jpg?v=637902272502730000",
    categoria: "mujer",
    description: "Producto: Calzado, Marca: FILA",
  },
  {
    id: "10",
    nombre: "Campera Adidas Original Slim Mujer",
    precio: 25000,
    stock: 16,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13362417-1000-1000/GD2507-A.jpg?v=637865134874500000",
    categoria: "mujer",
    description: "Producto: Campera, Marca: ADIDAS",
  },
  {
    id: "11",
    nombre: "Buzo Jordan Essential Rosa Mujer",
    precio: 19000,
    stock: 14,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/12934435-1000-1000/DD6998533-A.jpg?v=637825149678700000",
    categoria: "mujer",
    description: "Producto: Buzo, Marca: JORDAN",
  },
  {
    id: "12",
    nombre: "Mochila Nike Nk Heritage",
    precio: 9000,
    stock: 7,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13370256-1000-1000/DM2159010-A.jpg?v=637866636080070000",
    categoria: "accesorios",
    description: "Producto: Mochila, Marca: NIKE",
  },
  {
    id: "13",
    nombre: "Mochila Jansport Right",
    precio: 18000,
    stock: 5,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13346941-1000-1000/TYP754M-A.jpg?v=637862370655130000",
    categoria: "accesorios",
    description: "Producto: Mochila, Marca: JANSPORT",
  },
  {
    id: "14",
    nombre: "Gorra Lacoste X Peanuts",
    precio: 8000,
    stock: 13,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/13490110-1000-1000/RK782223001-A.jpg?v=637881354182130000",
    categoria: "accesorios",
    description: "Producto: Gorra, Marca: LACOSTE",
  },
  {
    id: "15",
    nombre: "Mochila Puma Prime Time",
    precio: 8000,
    stock: 6,
    pictureUrl:
      "https://newsport.vteximg.com.br/arquivos/ids/11776255-1000-1000/07834101-A.jpg?v=637748230920070000",
    categoria: "accesorios",
    description: "Producto: Mochila, Marca: PUMA",
  },
];

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  console.log(categoriaId);
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(listaProductos);
    }, 1000);
  });

  useEffect(() => {
    if (categoriaId) {
      promise
        .then((res) => {
          setProductos(res.filter((item) => item.categoria === categoriaId));
          setLoading(true);
        })
        .catch((err) => console.log(err));
    } else {
      promise
        .then((res) => {
          setProductos(res);
          setLoading(true);
        })
        .catch((err) => console.log(err));
    }
  }, [categoriaId]);

  return (
    <div style={{ textAlign: "center" }}>
      {!loading ? <h1>...Cargando</h1> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
