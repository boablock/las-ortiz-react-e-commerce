import React from "react";

import { useState, useEffect } from "react";
import config from "../../config.json";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {


  const [products, setProducts] = useState([]); //--> array con primer valor [0] = [], la posicion 2 [1] es una funcion que actualiza el valor de products, el cual inicial como un array vacio en este caso.

  const { categoryId } = useParams();

    // 1- bring firestore service
    // 2- create pointer to the data we need
    // 3- bring data by promise

  useEffect(() => {

    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'products');
    
    if (categoryId) {
      
      const queryFilter = query (queryCollection, where('category', '==', categoryId)); 
      getDocs(queryFilter).then(res => setProducts(res.docs.map(product =>({id: product.id, ...product.data()})))); 
    } else {
      getDocs(queryCollection).then(res => setProducts(res.docs.map(product =>({id: product.id, ...product.data()})))); 
    }
  }, [categoryId]);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;


