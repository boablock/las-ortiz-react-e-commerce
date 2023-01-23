import React from "react";
import { NavLink } from "react-router-dom";

import "./CartWidget.css";

const CartWidget = () => {

  return (
    <div>
      <NavLink to="/cart">
        <i className="bi bi-cart3 h2 link-danger cart-widget position-relative"></i>
      </NavLink>
      <span className=" cart-counter position-absolute bg-white text-center text-danger translate-middle h5 ">
        10
      </span>
    </div>
  );
};

export default CartWidget;
