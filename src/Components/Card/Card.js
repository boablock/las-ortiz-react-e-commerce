//RAFCE

import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({img, title, id, btnText }) => {
  console.log(id);
  return (
<div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={`/detail/${id}`} className="btn btn-primary">
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default Card;


