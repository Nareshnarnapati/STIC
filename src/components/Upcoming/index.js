// Allmovies.js
import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import ProductDetails from "../ProductDetails";
import "./index.css";
import Navbar from "../Header";

const Allmovies = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchImg, setSearchImg] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [originalProductsList, setOriginalProductsList] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiUrl =
        'https://api.themoviedb.org/3/movie/upcoming?api_key=34071dc3bcb76aaca6b6de040ffff600'
        const response = await fetch(apiUrl);
        if (response.ok) {
          const fetchedData = await response.json();
          setProductsList(fetchedData.results);
          setOriginalProductsList(fetchedData.results);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getProducts();
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchImg(searchTerm);
    if (searchTerm === "") {
      setProductsList(originalProductsList);
    } else {
      const filteredList = originalProductsList.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
      setProductsList(filteredList);
    }
  };

  const handleProductClick = (product, event) => {
    setSelectedProduct(product);
  
    const clickX = event.pageX;
    const clickY = event.pageY;
  
    const cardWidth = 350; 
    const cardHeight = 300; 
  
    const cardOffsetX = cardWidth ;
    const cardOffsetY = cardHeight/2;
  
    const imageRect = event.target.getBoundingClientRect();
    const imageX = imageRect.left + window.scrollX;
    const imageY = imageRect.top + window.scrollY;
    const imageWidth = imageRect.width;
    const imageHeight = imageRect.height;
  
    const positionX = Math.max(0, Math.min(clickX - cardOffsetX, imageX + imageWidth - cardWidth));
    const positionY = Math.max(0, Math.min(clickY - cardOffsetY, imageY + imageHeight - cardHeight));
  
    setSelectedPosition({ x: positionX, y: positionY });
  };
  
  
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-holder">
      <Navbar />
      <div className="heading-part">
        <h1 className="movie-head">Discover Our Movies</h1>
        <div className="flex-button">
          <input
            type="search"
            value={searchImg}
            placeholder="Search"
            onChange={handleSearchChange}
            className="search"
          />
          <button className="button">
            <img
              src="https://i.ibb.co/k6c9Kq5/icons8-search-48.png"
              alt="Search"
              className="search-img"
            />
          </button>
        </div>
      </div>
      <div className="products-list">
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            productData={product}
            onClick={(event) => handleProductClick(product, event)}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductDetails
          selectedProduct={selectedProduct}
          onClose={closeProductDetails}
          position={selectedPosition}
        />
      )}
    </div>
  );
};

export default Allmovies;
