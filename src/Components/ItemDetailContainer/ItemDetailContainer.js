import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import config from "../../config.json";
import './ItemDetailContainer.css'
import {getFirestore, doc, getDoc} from 'firebase/firestore'



const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detailId } = useParams();

  // 1- bring firestore service
  // 2- create pointer to the data we need
  // 3- bring data by promise

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'products', detailId);
    getDoc(queryDoc).then(res => setData({id: res.id, ...res.data()}));
  }, []);

  return (
    <div className="itemDetailContainer">
      <ItemDetail
        // data={data} //--> doesnt render photo products, why? 
        key={data.id}
        id={data.id}
        title={data.name}
        img={data.img}
        btnClass={data.btnClass}
        category={data.category}
        btnText={data.btnText}
        price ={data.price}
      />
    </div>
  );
};

export default ItemDetailContainer;
