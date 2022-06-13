import React from "react";
import Cart from "../Cart/Cart";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import image from "../../images/logo.png";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="global">
        <nav className="navBar">
          <input type="checkbox" id="check" />
          <label for="check" className="checkBtn">
            <svg
              className="bars"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </label>
          <Link to="/">
            <a href="#" className="enlace">
              <img src={logo} alt="..." className="logo" />
            </a>
          </Link>
          <ul>
            <li>
              <Link to="/">
                <a href="#">Inicio</a>
              </Link>
            </li>
            <li>
              <Link to="/category/hombre">
                <a href="#">Hombre</a>
              </Link>
            </li>
            <li>
              <Link to="/category/mujer">
                <a href="#">Mujer</a>
              </Link>
            </li>
            <li>
              <Link to="/category/accesorios">
                <a href="#">Accesorios</a>
              </Link>
            </li>
          </ul>
          <div className="cart">
            <CartWidget></CartWidget>
          </div>
        </nav>
        <section></section>
      </div>
    </div>
  );
}

export default NavBar;
