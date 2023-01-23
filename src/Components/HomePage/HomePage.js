import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <section className="HomeSection1 parrallax">
        <div className="boxTransparente">
          <div id="divHome" className="wow animate__animated animate__pulse">
            <h1 className="lasOrtizTitle wow animate__animated animate__pulse">
              Las ortiz
            </h1>
            <h2 id="h2"> Flower Store</h2>
            <a
              className="aSize"
              href="https://www.instagram.com/lasortiz.flowerstore/"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="block1 col-sm-6 ">
            <div>
              <h4 className="titleBlock">NOSOTRAS</h4>
            </div>
            <p className="pBlock">
              Nos dedicamos al diseño con flores, plantas y materiales propios
              de la naturaleza desde nuestro taller en Villa Adelina.Suscripciones, regalos frescos, productos de la naturaleza y objetos
              en nuestra Tienda Online.Ramos de novia. Instalaciones y estilismo
              con materiales de la naturaleza.
            </p>
            <NavLink to="/nosotras" className="btn btn-primary">
              Mas sobre Las Ortiz
            </NavLink>
          </div>
          <div className="block2 col-sm-6 ">
            <div>
              <img id="imgNosotras" src="../../Assets/nosotras.jpg" alt="" />
            </div>
          </div>
          <div className="block2 col-sm-6 ">
            <img
              id="imgNosotras"
              src="../../Assets/suscripciones1.jpg"
              alt=""
            />
          </div>
          <div className="block1 col-sm-6">
            <div>
              <h4 className="titleBlock">SUSCRIPCIONES</h4>
            </div>
            <p className="pBlock">
              Ofrecemos suscripciones semanales, quincenales y mensuales. Podes
              elegir de nuestros ramos de autor, sugerir tus colores y flores
              favoritas, o dejar que nosotras creemos algo para vos. Todos los
              Sábados realizamos delivery sin cargo para CABA y Zona Norte.
              Contactanos para armar una suscripción a tu medida y gusto!{" "}
            </p>
            <NavLink href="#" className="btn btn-primary">
              Pedir cotizacion
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
