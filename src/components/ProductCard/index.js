import React from "react";
import "./index.css";

const ProductCard = ({ productData, onClick }) => {
  const { backdrop_path, title, release_date, vote_average } = productData;

  return (
    <div className="product-card" onClick={onClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt="poster"
        className="poster-design"
      />
      <div className="product-info">
        <p>
          <span className="span-line">{title}</span>
        </p>
        <p>Release: <span className="span-line2"> {release_date}</span></p>
        <p>Popularity: <span className="span-line2">{vote_average}</span></p>
      </div>
    </div>
  );
};

export default ProductCard;
