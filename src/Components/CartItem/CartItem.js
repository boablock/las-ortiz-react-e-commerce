import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./CartItem.css";
const CartItem = ({product}) => {

  // const {removeProduct} = useCartContext();

  return (
    <div className="cartItem">
      <img src={product.img} alt={product.title}/>
      <div>
        <p>{product.title}</p>
        <p>{product.quantity}</p>
        {console.log( 'Quantity: ',isNaN(product.quantity))}
        {console.log( 'Price: ',isNaN(product.price))}
        {console.log( 'Subtotal: ',isNaN(product.quantity * product.price))}
        <p>Precio: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price  } </p>
        {/* <button onClick={removeProduct(product.id)}>Elimitar</button> */}
      </div>
    </div>
  );
};

export default CartItem;
