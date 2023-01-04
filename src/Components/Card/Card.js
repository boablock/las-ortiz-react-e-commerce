//RAFCE

import React from "react";
import "./Card.css";

const Card = (props) => {
  const { img, title, btnText } = props;
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href="#" className="btn btn-primary">
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default Card;
