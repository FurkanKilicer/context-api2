import React from "react";
import { products } from "../data/data";
import { Link, Switch, Route } from "react-router-dom";
import ProductID from "./ProcutID";

export default function Product() {
  const productsMap = products.map(item => (
    <li>
      <Link to={`/product/${item._id}`}>{item.title}</Link>
    </li>
  ));
  return (
    <div className="mt-5 text-center">
      <h1>Products</h1>
      <hr />
      {productsMap}
      <Switch>
        <Route path="/product/:productID">
          <ProductID />
        </Route>
      </Switch>
    </div>
  );
}
