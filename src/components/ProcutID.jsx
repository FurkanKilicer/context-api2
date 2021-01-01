import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";

export default function ProcutID() {
  const { productID } = useParams();

  const product = products.filter(item => item._id === Number(productID));
  return (
    <div className="container">
      <div className="card mt-5">
        <img
          className="card-img-top w-100"
          src={product[0].imgURL}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product[0].title}</h5>
          <p className="card-text">{product[0].detail}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
