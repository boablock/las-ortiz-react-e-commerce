import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  //Conditional rendering
  if (cart.length === 0) {
    return (
      <>
        <p>This are not elements on cart</p>
        <Link to="/tienda"> Go shopping </Link>
      </>
    );
  } else {
    return (
      <>
        {console.log(cart)}
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <p className="d-flex justify-content-center">total: ${totalPrice()}</p>
    
      </>
    );
  }
};

export default Cart;
