import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ Children }) => {
  const [cart, setCart] = useState([]);


  //Add product
  const addProduct = (item,newQuantity) => {
    const newCart = cart.filter (prod => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity});
    setCart(newCart)
  }
  //Limpiar carrito
  const clearCart = () => setCart ([]);

  //Saber si esta en carrito
  const isInCart = (id) => cart.find(product => product.id === id) ? true : false

  //Borrar item del carrito
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
      clearCart : clearCart,
      isInCart : isInCart,
      removeProduct : removeProduct,
      addProduct :addProduct
    }}>
      {Children}
    </CartContext.Provider>
  );
};

export default CartContext;
