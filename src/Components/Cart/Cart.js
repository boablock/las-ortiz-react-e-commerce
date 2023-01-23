import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();


  const order ={
    buyer: {
      name:'Pablo',
      email:'pablo@gmail.com',
      phone:'116400233',
      address: 'Av siempre viva 123'
    },
    items: cart.map(product => ({id:product.id, name:product.name,price:product.price, quantity: product.quantity})),
    total: totalPrice()
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order).then(({id}) => console.log(id));
  }
  //Conditional rendering
  if (cart.length === 0) {
    return (
      <>
        <p>No items in the cart</p>
        <Link to="/tienda"> Go shopping </Link>
      </>
    );
  } else {
    return (
      <>
        {console.log(cart.length)}
        {cart.map((product) => ( 
          <CartItem key={product.id} product={product} />
        ))}
        <p className="d-flex justify-content-center">total: ${totalPrice()}</p>
        <button onClick={handleClick}>Emitir compra</button>
      </>
    );
  }
};

export default Cart;
