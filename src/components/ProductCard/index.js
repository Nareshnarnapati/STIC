
import React from "react";
import "./index.css";

const ProductCard = ({ productData }) => {
  const { title, image, description,price } = productData;

  return (
    <li className="product-card">
      <img src={image} alt="pictures" className="product-image" />
      <div className="product-info">
        <p>
          <span className="span-line">{title}</span>
        </p>
        <p>
          Price: <span className="span-line">{price}</span>
        </p>
        <p>
          
          <span className="span-line2">{description}</span>
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
