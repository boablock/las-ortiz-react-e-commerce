import React from "react";

import { useState, useEffect } from "react";
import config from "../../config.json";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); //--> array con primer valor [0] = [], la posicion 2 [1] es una funcion que actualiza el valor de products, el cual inicial como un array vacio en este caso.

  const { categoryId } = useParams();

  useEffect(() => {
    const operation = new Promise((resolve, reject) => {
      resolve(config.products);
    });

    if (categoryId) {
      operation.then((result) =>
        setProducts(result.filter((product) => product.category === categoryId))
      );
    } else {
      operation.then((result) => setProducts(result));
    }
  }, [categoryId]);

  return (
    <>
      <div className="">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
