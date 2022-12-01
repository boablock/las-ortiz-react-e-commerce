//RAFCE

import React from 'react'
import './Card.css'

const Card = (props) => {
    const{cardTitle,img,description, btnText} = props;
  return (
<div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{cardTitle}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">{btnText}</a>
  </div>
</div> 
  )
}

export default Card