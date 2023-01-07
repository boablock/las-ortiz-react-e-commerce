import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({ img, title, id, btnText }) => {
  console.log(title);
  return (
    <div className="itemDetailContainer">
      <div className="itemDetail">
        <h3 className="text-center"> DETALLE DE PRODUCTO</h3>
        <h5 className="card-title text-center">{title}</h5>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body d-flex justify-content-end flex-column">
          <Link to={`/detail/${id}`} className="btn btn-primary">
            Añadir al carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
