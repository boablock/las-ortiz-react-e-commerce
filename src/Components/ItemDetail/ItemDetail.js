import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ( {img, title, id, btnText} ) => {
  console.log(title);
  return (
   
    <div className="card">
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={`/detail/${id}`} className="btn btn-primary">
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
