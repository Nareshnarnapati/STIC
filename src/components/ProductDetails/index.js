// ProductDetails.js
import React from 'react';
import './index.css';

const ProductDetails = ({ selectedProduct, onClose, position = { x: 0, y: 0 } }) => {
  const { title, original_title, overview, vote_average, poster_path } = selectedProduct;

  return (
    <div className="movie-details" style={{ top: `${position.y}px`, right: `${position.x}px` }}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="image-card" />
      <div className="product-details-info">
        <h2 className="movie-card-h1">{title}</h2>
        <p>Original Title: <span className="over-span"> {original_title}</span></p>
        <p>Overview:<span className="over-span"> {overview}</span></p>
        <p>Vote Average:<span className="over-span"> {vote_average}</span> </p>
      </div>
      <button className="button-card" onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductDetails;
