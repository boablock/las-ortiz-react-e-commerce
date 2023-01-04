import React from "react";

import { useState, useEffect } from "react";
import config from "../../config.json";
import "./ItemListContainer.css";
import { NavLink } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); //--> array con primer valor [0] = [], la posicion 2 [1] es una funcion que actualiza el valor de products, el cual inicial como un array vacio en este caso.

  const getProducts = () => {
    const operation = new Promise((resolve, reject) => {
      resolve(config.products);
      // reject('Something is wrong')
    });
    operation
      .then((result) => { //--> result es lo que se resuelve arriba en el promise. 
        console.log(result);
        setProducts(result); //--> una vez que se resualva la peticion, guardar la respuesta en el useState (setCards(result.data))
      })
      .catch((err) => {
        console.log(err, "ERROR EN EL CATCH");
        alert("something is wrong");
      })
      .finally(() => {
        //--> se ejecuta asi la respuesta sea resolve o reject; no importa como termine la promesa, se ejecuta lo que se        acalare en el finally ( asi la respuesta sea resolve o reject).
      });
  };

  useEffect(() => {
    getProducts();

    return () => {
      // setProducts()
    };
  }, []);

  return (
    <>
      <ItemList products={products}/>
    </>
  );
};

export default ItemListContainer;

/*

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
        {products.map(({ title, img, btnText, btnClassName }, index) => (
          <Card
            key={index} // atributo unico para identificar el objeto en el arreglo (posicion en el caso de index); tmb se puede generar un atributo id en cada uno de ellos.
            title={title}
            img={img}
            btnText={btnText}
            btnClassName={btnClassName}
          />
        ))}
      </div>


*/