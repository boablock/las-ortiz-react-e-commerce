
import './App.css';
import Navbar from './Components/Nabvar/Navbar';
import Card from './Components/Card/Card';
import { useState,useEffect } from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route,Switch, Link, BrowserRouter } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';



function App() {



  return (

    <BrowserRouter>
    
    
      <Navbar/>
      {/* <ItemListContainer/> */}

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/tienda' element={<ItemListContainer/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
