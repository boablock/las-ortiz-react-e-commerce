import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ramo1 = {
  id: 1,
  title: "Rouses",
  img :"./Assets/ramo1.webp",
  btnText: "Encargar",
  btnClassName:"btn btn-primary",
  category: "ramos"
}
// public\Assets\ramo1.webp

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

useEffect(() => {
  const getData = new Promise(resolve =>{
    resolve(ramo1)
  })
  getData.then(res => setData(res));
  
}, [])

  return (
    <div>
      <ItemDetail data={data}/>
    </div>
  )
}

export default ItemDetailContainer