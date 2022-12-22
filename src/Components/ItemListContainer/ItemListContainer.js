

import React from 'react'
import Card from '../Card/Card';
import { useState,useEffect } from 'react';
import config from '../../config.json'


const ItemListContainer = () => {

  const [products,setProducts] = useState([])

  const getProducts = ()=>{
   
    const operation = new Promise ((resolve, reject)=>{
        resolve({
          status:200,
          data:config.products
        })

      // reject('Something is wrong')
    })
  
    operation.then((result) => { 
      setProducts(result.data) //--> una vez que se resualva la peticion, guardar la respuesta en el useState (setCards(result.data)) 
      console.log(result);
    })
    .catch((err)=>{
      console.log(err,'ERROR EN EL CATCH');
      alert('something is wrong');
    })
    .finally(()=>{ //--> se ejecuta asi la respuesta sea resolve o reject; no importa como termine la promesa, se ejecuta lo que se                       acalare en el finally ( asi la respuesta sea resolve o reject). 
      
    })
  }

  useEffect(() => {
    getProducts()
  
    return () => {
      setProducts()
    }
  }, [])


    
  return (
 
    <div className='wrapper mt-5' >
          { products.map(({title,img,btnText,btnClassName},index) => (
              <Card
              key ={index} // atributo unico para identificar el objeto en el arreglo (posicion en el caso de index); tmb se puede generar un atributo id en cada uno de ellos. 
              title={title}
              img={img}
              btnText ={btnText}
              btnClassName ={btnClassName}
              />)
          )}
        </div>
  )
}

export default ItemListContainer