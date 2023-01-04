import React from 'react'
import './ItemDetail.css'
export const ItemDetail = ({data}) => {
 
  return (
    <div className="card">
    <img src={data.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <a href="#" className="btn btn-primary">
        {data.btnText}
      </a>
    </div>
  </div>
  )
}

export default ItemDetail