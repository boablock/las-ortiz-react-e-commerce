import "./App.css";
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


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ItemDetailContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tienda" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/datail" element={<ItemDetailContainer />} />
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
