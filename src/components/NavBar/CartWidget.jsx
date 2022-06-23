import React from "react";
import "../NavBar/CartWidget.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

function CartWidget() {
  const { IconCart } = useCartContext();

  return (
    <Link to="/cart">
      <div className="cartWidget">
        {IconCart() < 1 ? (
          <p className="numberWidget">0</p>
        ) : (
          <p className="numberWidget">{IconCart()}</p>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      </div>
    </Link>
  );
}

export default CartWidget;
