import React from "react";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="wrapper-tienda">
        <div className="search-box mt-5 mr-5">
          <h6>Busca tu producto:</h6>
          <ul
            className="d-flex flex-columns justify-content-start"
            style={{
              width: "100%",
              height:'30%',
              listStyle: "none",
              border: "solid 3px #EDE1DB",
            }}
          >
            <li>
              <NavLink to="/category/flower-box"> Flower Box</NavLink>
            </li>
            <li>
              <NavLink to="/category/ramos"> Ramos </NavLink>
            </li>
          </ul>
        </div>
        <div className="items-box mt-5 m-0 ">
          {products.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              name={p.name}
              img={p.img}
              btnClassName={p.btnClassName}
              category={p.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
