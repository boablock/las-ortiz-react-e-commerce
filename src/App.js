import "./App.css";
import React from "react";
import Navbar from "./Components/Nabvar/Navbar";
// import Card from './Components/Card/Card';
// import { useState,useEffect } from 'react';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./Components/404/Error404";
import CartProvider from "./Context/CartContext";
import Nosotras from "./Components/Nosotras/Nosotras";
import Suscripciones from "./Components/Suscripciones/Suscripciones";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tienda" element={<ItemListContainer />} />
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="/suscripciones" element={<Suscripciones />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
