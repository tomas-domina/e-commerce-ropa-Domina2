import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemList/Item.css";
import { Link } from "react-router-dom";
import { memo } from "react";

const Item = memo(({ producto }) => {
  const { nombre, pictureUrl, precio, stock, id } = producto;
  return (
    <div className="card card-main">
      <img className="card-img-top" src={pictureUrl} alt="" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">${precio}</p>

        <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
          <a href="#" class="btn btn-primary ver-detalles">
            Ver Detalles
          </a>
        </Link>
      </div>
    </div>
  );
});

export default Item;
