import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <div>
      <NavLink to="/cart">
        <i className="bi bi-cart3 h2 link-danger cart-widget position-relative"></i>
      </NavLink>
      <span className=" cart-counter position-absolute text-center translate-middle h5 ">
        {cart.length}
      </span>
    </div>
  );
};

export default CartWidget;
