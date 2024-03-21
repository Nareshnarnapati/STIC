
import React from "react";
import "./index.css";

const ProductCard = ({ productData }) => {
  const { id, image, description } = productData;

  return (
    <li className="product-card">
      <img src={image.regular} alt="pictures" className="product-image" />
      <div className="product-info">
        <p>
          ID: <span className="span-line">{id}</span>
        </p>
        <p>
          Description:{" "}
          <span className="span-line2">{description}</span>
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
