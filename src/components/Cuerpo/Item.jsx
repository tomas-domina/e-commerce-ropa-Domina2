import React from "react";

const Item = (item) => {
  return (
    <div className="card w-180">
      <img src={item.img} height={200} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.price}</p>
        <a href="#" class="btn btn-primary">
          Ver Detalles
        </a>
      </div>
    </div>
  );
};

export default Item;
