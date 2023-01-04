import React from 'react'
import Card from "../Card/Card";
const ItemList = ({products= []}) => {
  return (
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
  )
}

export default ItemList