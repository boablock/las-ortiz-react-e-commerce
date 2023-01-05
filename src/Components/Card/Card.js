//RAFCE

import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({p}) => {
  return (
<div className="card">
      <img src={p.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{p.title}</h5>
        <Link to={`/detail/${p.id}`} className="btn btn-primary">
          Comprar
        </Link>
      </div>
    </div>
  );
};

export default Card;


