import React from "react";

const DeleteIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon-tabler-x"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="#ff2825"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
};

export default DeleteIcon;
