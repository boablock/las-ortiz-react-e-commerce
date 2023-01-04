//RAFCE

import React from 'react'
import './Navbar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { hover } from '@testing-library/user-event/dist/hover'
import { NavLink } from 'react-router-dom'
// src\Components\Nabvar\Navbar.js
//src\Assets\logo.png

const Navbar = () => {
  return (
    <nav className=" mb-3 navbar-boxes navbar navbar-expand-lg bg-light">
        <div className="navbar-boxes container-fluid">
            <NavLink className="navbar-brand" to="./"><img className='logo' src='.\Assets\logo.png'></img></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" d-flex justify-content-center navbar-boxes collapse navbar-collapse" id="navbarNav">
                <ul className=" d-flex justify-content-around navbar-boxes navbar-nav" style={{width:'70%'}}>
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="./tienda">Tienda</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">Suscripciones</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">Nosotras</NavLink>
                    </li>
                    <li className="nav-item">
                     <NavLink className="nav-link" to="#">Eventos</NavLink>
                    </li>
                    <li className=" nav-item-cart" >
                      <NavLink className=" nav-link " to="./cart" >
                        <CartWidget/>
                      </NavLink>
                    </li>
                </ul>
                      {/* <NavLink className="cart nav-link " to="./cart">
                        <CartWidget/>
                      </NavLink> */}
               
            </div>
        </div>
    </nav>
  )
}

export default Navbar