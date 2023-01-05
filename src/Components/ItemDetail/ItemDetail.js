import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ( {data} ) => {
  return (
   
    <div className="card">
      <img src={data.img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <Link to={`/detail/${data.id}`} className="btn btn-primary">
          {data.btnText}
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
