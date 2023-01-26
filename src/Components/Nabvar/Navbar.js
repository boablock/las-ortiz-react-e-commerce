import React from "react";
import "./Navbar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="menu">
        <label className="logo"><img src="../../../public/Assets/logo.png"/></label>
        <ul className="menu_items">
          <li>
            <NavLink to="#">Home</NavLink>
          </li>
          <li>
            <NavLink to="#">Tienda</NavLink>
          </li>
          <li>
            <NavLink to="#">Nosotras</NavLink>
          </li>
          <li>
            <NavLink to="#">Eventos</NavLink>
          </li>
          <li>
            <NavLink to="#">Contacto</NavLink>
          </li>
        </ul>
        <span className="btn-menu">
          <i class="fa-solid fa-bars"></i>
        </span>
      </nav>
    </>
  );
};

export default Navbar;
