import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { ShoppingCart} from 'react-icons/fa'
import { BsCart } from "react-icons/bs"

import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <div className="div-cartwidget">
      <NavLink to="/cart">
        <BsCart className="cart" color='black' size = '23px'/>
      </NavLink>
      <span className=" cart-counter1 h6 ">
        {cart.length}
      </span>
    </div>
  );
};

export default CartWidget;
