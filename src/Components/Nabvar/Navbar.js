import React from "react";
import "./Navbar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className={ toggle ? "navbar expanded " : " navbar" }>
        <div className="">
          <NavLink className="" to="./">
            <img className="logo1" src=".\Assets\logo.png" alt="" />
          </NavLink>
        </div>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? <AiOutlineCloseCircle /> : <RxHamburgerMenu />} 
        </div>
        <div className="links-box">
        <ul className="links">
          <li>
            <NavLink className="li" to="./">Home</NavLink>
          </li>
          <li>
            <NavLink className="li" to="./tienda">Tienda</NavLink>
          </li>
          <li>
            <NavLink className="li" to="./nosotras">Nosotras</NavLink>
          </li>
          <li>
            <NavLink className="li" to="./eventos">Eventos</NavLink>
          </li>
          <li>
            <NavLink className="li" to="./contacto">Contacto</NavLink>
          </li>
          <li className="li-cart">
            <NavLink className="li-cart" to="./cart"> <CartWidget/> </NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
