import React from "react";
import ItemCount from "./ItemCount";
import "../Cuerpo/Item.css";

const Item = ({ producto }) => {
  const { nombre, pictureUrl, precio, stock } = producto;
  return (
    <div className="card">
      <img className="card-img-top" src={pictureUrl} alt="" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">${precio}</p>
        <a href="#" class="btn btn-primary">
          Ver Detalles
        </a>
      </div>
    </div>
  );
};

export default Item;
