//RAFCE

import React from 'react'
import './Navbar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { hover } from '@testing-library/user-event/dist/hover'
// src\Components\Nabvar\Navbar.js
//src\Assets\logo.png

const Navbar = () => {
  return (
    <nav className=" mb-3 navbar-boxes navbar navbar-expand-lg bg-light">
        <div className="navbar-boxes container-fluid">
            <a className="navbar-brand" href="#"><img className='logo' src='.\Assets\logo.png'></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" d-flex justify-content-center navbar-boxes collapse navbar-collapse" id="navbarNav">
                <ul className=" d-flex justify-content-around navbar-boxes navbar-nav" style={{width:'70%'}}>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Tienda</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Suscripciones</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Nosotras</a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link" href="#">Eventos</a>
                    </li>
                    <li className=" nav-item-cart" >
                      <a className=" nav-link " >
                        <CartWidget/>
                      </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar