import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import config from "../../config.json";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    const operation = new Promise((resolve, reject) => {
      resolve(config.products);
      console.log(config.products);
    });

    operation.then((result) =>
      setData(result.find((product) => product.id === parseInt(detailId)))
    );
  }, [detailId]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail
        key={data.id}
        id={data.id}
        title={data.title}
        img={data.img}
        btnClass={data.btnClass}
        category={data.category}
        btnText={data.btnText}
      />
    </div>
  );
};

export default ItemDetailContainer;
