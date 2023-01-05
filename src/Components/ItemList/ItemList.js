import React from "react";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const ItemList = ({ products = [] }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h5>Categories</h5>
        <ul
          className="d-flex flex-row justify-content-around"
          style={{ width: "50%", listStyle: "none", border: "solid 1px black" }}
        >
          <li>
            <NavLink to="/category/flower-boxes"> Flower Box</NavLink>
          </li>
          <li>
            <NavLink to="/category/ramos"> Ramos </NavLink>
          </li>
        </ul>
      </div>
      <div className="wrapper mt-5">
        {products.map(({ title, img, btnText, btnClassName,id }) => (
          <Card
            key={id} // atributo unico para identificar el objeto en el arreglo (posicion en el caso de index); tmb se puede generar un atributo id en cada uno de ellos.
            title={title}
            img={img}
            btnText={btnText}
            btnClassName={btnClassName}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
