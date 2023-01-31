import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./Ecom";

function Product() {
  let { id } = useParams();
  const filterProduct = products.find((item) => item.id === id);
  console.log(filterProduct);
  return (
    <div>
      <div className="split" key={filterProduct.id}>
        <div className="card">
          <img src={filterProduct.productimage} alt="products" />

          <h1 className="productname">{filterProduct.productname}</h1>
          <p className="productdetails">{filterProduct.productdetails}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
