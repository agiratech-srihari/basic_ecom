import React from "react";
import "./Ecom.css";
import { useNavigate } from "react-router-dom";

export const products = [
  {
    id: "1",
    productname: "Electronics",
    productdetails:
      "The term electronics thus deals with electrical circuits that have electrical components. These common electrical components are vacuum tubes, transistors, diodes, integrated circuits, optoelectronics, and sensors. All of them are associated with passive electrical components and interconnection technologies.",
    productimage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/1024px-Arduino_ftdi_chip-1.jpg",
  },
  {
    id: "2",
    productname: "Clothes",
    productdetails:
      "Clothing (also known as clothes, apparel, and attire) are items worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together.",
    productimage:
      "https://hermoney.com/wp-content/uploads/2022/07/close-up-of-denim-jeans-in-the-store_t20_moyvdd-840x487.jpg",
  },
];
function Ecom() {
  const navigatep = useNavigate();

  return (
    <>
      <div>
        <header
          style={{
            backgroundColor: "white",
            marginTop: "-1.5rem",
            padding: "2rem 1rem 1rem 1rem",
          }}
        >
          <nav>
            <h1>E-Commerce</h1>
          </nav>
        </header>
        {products.map((product) => {
          return (
            <div className="split" key={product.id}>
              <div className="card">
                <img src={product.productimage} alt="products" />

                <h1 className="productname">{product.productname}</h1>
                <p className="productdetails">{product.productdetails}</p>
                <button
                  onClick={() => navigatep("/product/" + product.id)}
                  className="btn"
                >
                  product Detail
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Ecom;
