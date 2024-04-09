
import React from "react";
import "./index.css";

const ProductCard = ({ productData }) => {
  const { backdrop_path,title,release_date,vote_average} = productData;

  return (
    <li className="product-card">
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="poster" className="poster-design"/>
      <div className="product-info">
        <p>
          <span className="span-line">{title}</span>
        </p>
        <p>
        Release: {release_date}
      </p>
        <p>
        Rating: {vote_average}
      </p>
      </div>
    </li>
  );
};

export default ProductCard;
