import React from "react";

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <a href="...">
        <i className="bi bi-cart3 h2 link-danger cart-widget position-relative"></i>
      </a>
      <span className=" cart-counter position-absolute bg-white text-center text-danger translate-middle h5 ">
        10
      </span>
    </div>
  );
};

export default CartWidget;
