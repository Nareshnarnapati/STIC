import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import "./index.css";

const Allmovies = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchImg, setSearchImg] = useState("");
 
  const [originalProductsList, setOriginalProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiUrl =
        'https://api.themoviedb.org/3/discover/movie?api_key=34071dc3bcb76aaca6b6de040ffff600'
        const response = await fetch(apiUrl);
        if (response.ok) {
       const fetchedData = await response.json();
          setProductsList(fetchedData.results);
          setOriginalProductsList(fetchedData.results); 
      
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) { }
    };
    getProducts();
  }, []);
const handleSearchChange = (event) => {
    setSearchImg(event.target.value);
    if (event.target.value === "") {
      
      setProductsList(originalProductsList);
    } else {
      
      const filteredList = originalProductsList.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setProductsList(filteredList);
    }
  };

  return (
    <div className="bg-holder">
      <div className="heading-part">
        <h1>
          Discover Our Movies
        </h1>
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
              alt="icons8-search-48"
              className="search-img"
            />
          </button>
        </div>
      </div>
      <div>
      {(<div className="products-list">
          {productsList.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
      
        </div>
      )}

      </div>
      </div>
);
};

export default Allmovies;