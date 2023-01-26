import React from "react";
import "./Navbar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="menu">
        <NavLink className=" navbar-brand" to="./">
          <img className="lo_logo" src=".\Assets\logo.png" alt="" />
        </NavLink>
        <ul className="menu_items">
          <li>
            <NavLink className="active" to="./">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="./tienda">Tienda</NavLink>
          </li>
          <li>
            <NavLink to="./nosotras">Nosotras</NavLink>
          </li>
          <li>
            <NavLink to="#">Eventos</NavLink>
          </li>
          <li>
            <NavLink to="#">Contacto</NavLink>
          </li>
        </ul>
        <span className="btn_menu">
          <i class=" btn_ham fa-solid fa-bars"></i>
        </span>
        <div className="cart-widget-box">
          <span className=" nav-item-cart">
            <NavLink className=" nav-link " to="./cart">
              <CartWidget />
            </NavLink>
          </span>
        </div> 
      </nav>
    </>
  );
};

export default Navbar;
/*
{/* <nav className=" nav-bar navbar1navbar-boxes navbar navbar-expand-lg bg-light">
<div className=" nav-bar container-fluid">
  <NavLink className="navbar-brand" to="./">
    <img className="logo" src=".\Assets\logo.png" alt="" />
  </NavLink>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div
    className=" d-flex justify-content-center navbar-boxes collapse navbar-collapse"
    id="navbarNav"
  >
    <ul
      className=" d-flex justify-content-around navbar-boxes navbar-nav"
      style={{ width: "70%" }}
    >
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          aria-current="page"
          to="./tienda"
        >
          Tienda
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="./suscripciones">
          Suscripciones
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="./nosotras">
          Nosotras
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">
          Eventos
        </NavLink>
      </li>
      <li className=" nav-item-cart">
        <NavLink className=" nav-link " to="./cart">
          <CartWidget />
        </NavLink>
      </li>
    </ul>
    {/* <NavLink className="cart nav-link " to="./cart">
                  <CartWidget/>
                </NavLink> 
  */
