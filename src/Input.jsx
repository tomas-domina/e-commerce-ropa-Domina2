import React from "react";

const Input = () => {
  const inputHandler = (event) => {
    // event.preventDefault();
    console.log(event.key);
  };
  return (
    <div className="box mt-3">
      <div className="border border-1 border-warning">
        <input
          className="m-5"
          onKeyDown={inputHandler}
          type="text"
          name="nombre"
          id="i"
        />
      </div>
    </div>
  );
};

export default Input;
