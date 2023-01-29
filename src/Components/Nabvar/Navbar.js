import React from "react";
import "./Navbar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <div className="navbar1">
        <div className="">
          <NavLink className="" to="./">
            <img className="logo1" src=".\Assets\logo.png" alt="" />
          </NavLink>
        </div>
        <div className="toggle-icon">
          <RxHamburgerMenu />
        </div>
        <div className="links">
          <li>
            <NavLink className="li" to="./">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="li" to="./tienda">
              Tienda
            </NavLink>
          </li>
          <li>
            <NavLink className="li" to="./nosotras">
              Nosotras
            </NavLink>
          </li>
          <li>
            <NavLink className="li" to="./eventos">
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink className="li" to="./contacto">
              Contacto
            </NavLink>
          </li>
          <li className="li">
            <NavLink className="li" to="./cart">
              <CartWidget />
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
