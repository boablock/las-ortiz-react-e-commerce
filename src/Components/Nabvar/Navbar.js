//RAFCE

import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar-boxes navbar navbar-expand-lg bg-light">
        <div className="navbar-boxes container-fluid">
            <a className="navbar-brand" href="#"><img className='logo' src='./Assets/logo.png'></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" d-flex justify-content-center navbar-boxes collapse navbar-collapse" id="navbarNav">
                <ul className=" d-flex justify-content-around navbar-boxes navbar-nav" style={{width:'70%'}}>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar