import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const InputCount = () => {
  return (
    <div>
      <Link to="/cart">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("Ir a Cart")}
        >
          Ir al Carrito
        </button>
      </Link>
      <Link to="/">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("Ir al Home")}
        >
          Seguir Comprando
        </button>
      </Link>
    </div>
  );
};

const ButtonCount = ({ handleInter }) => {
  return (
    <button className="btn btn-outline-success" onClick={handleInter}>
      Agregar al Carrito
    </button>
  );
};

const Intercambiabilidad = () => {
  const [inputType, setInputType] = useState("button");

  const handleInter = () => {
    setInputType("input");
  };

  return (
    <div>
      {inputType === "button" ? (
        <ButtonCount handleInter={handleInter} />
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Intercambiabilidad;
