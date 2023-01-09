import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


const Card = (p) => {
  const {img,title,id} = p;
  // console.log(id);
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body d-flex justify-content-center flex-column">
        <h5 className="card-title text-center">{title}</h5>
        <Link to={`/detail/${id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Card;
