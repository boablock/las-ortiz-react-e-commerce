import React, {useState,useContext} from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

export const ItemDetail = ( data ) => {

  const [goToCart, setGoToCart] = useState(false);

  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data,quantity)
  }
  
  return (
    <div className="itemDetailContainer">
      <div className="itemDetail">
        <h3 className="text-center"> DETALLE DE PRODUCTO</h3>
        <h5 className="card-title text-center">{data.title}</h5>
        <img src={data.img} className="card-img-top" alt="" />
        <div className="card-body d-flex justify-content-end flex-column">
          <Link to={`/detail/${data.id}`} className="btn btn-primary">
            Añadir al carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
