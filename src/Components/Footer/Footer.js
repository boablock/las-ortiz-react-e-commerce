import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="FooterContainer">
      <div className="footerBox">
        <ul>
          <li className="title">
            <strong>TALLER PRIVADO</strong>
          </li>
          <li className="info">San isidro, Prov. de Buenos Aires, Argentina</li>
          <li className="info">Teléfono y Whatsapp:011 59455293</li>
          {/* <a  id="wappBox" className="info" id="logoWhatsap" href="https://www.instagram.com/lasortiz.flowerstore/"><i  className="bi bi-whatsapp "></i></a> */}
        </ul>
      </div>
      <div className="footerBox">
        <ul>
          <li className="title">
            <strong>SEGUINOS</strong>
          </li>
          <a
            className="igBox"
            href="https://www.instagram.com/lasortiz.flowerstore/"
          >
            <i id="igFooter" className="bi bi-instagram"></i>
          </a>
        </ul>
      </div>
      <div className="footerBox">
        <ul>
          <li className="title">
            {" "}
            <strong>HORARIOS DE ATENCION</strong>
          </li>
          <li className="info">Lunes a Viernes: 9hs a 19 hs</li>
          <li className="info">Sábados: 9hs a 13 hs</li>
          <li className="info">Domingos: cerrado</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
