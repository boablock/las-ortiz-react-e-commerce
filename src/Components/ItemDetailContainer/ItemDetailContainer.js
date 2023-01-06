import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import config from "../../config.json";

//Hacer el mismo proceso que en itemListContainer, haciendo promise al JSON para acceder a todos los productos. 
// const ramo1 = {
//   id: 1,
//   title: "Rouses",
//   img :"./Assets/ramo1.webp",
//   btnText: "Encargar",
//   btnClassName:"btn btn-primary",
//   category: "ramos"
// }
// public\Assets\ramo1.webp

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detailId } = useParams();

useEffect(() => {
  const operation = new Promise((resolve, reject) => {
    resolve(config.products);
    console.log(config.products);
  });
 
    operation.then(result => setData(result.find(product =>  product.id === parseInt(detailId) )));
}, [detailId])  


  return (

      <ItemDetail 
      key={data.id}
      id={data.id}
      title={data.title}
      img={data.img}
      btnClass={data.btnClass}
      category={data.category}
      btnText={data.btnText}/>
  
  )
}

export default ItemDetailContainer