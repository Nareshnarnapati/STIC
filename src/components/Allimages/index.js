import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import "./index.css";

const Allimages = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchImg, setSearchImg] = useState("");
  const [loading, setLoading] = useState(true);
  const [originalProductsList, setOriginalProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiUrl =
          "https://api.unsplash.com/photos/?client_id=voZ4Tv-yghsXDUr-U3WDCdNYguMNH6HjJQgYXdtdTQs";
        const response = await fetch(apiUrl);
        if (response.ok) {
          const fetchedData = await response.json();
          const updatedData = fetchedData.map((product) => ({
            id: product.id,
            title: product.title,
            image: product.urls,
            description: product.description || "",
          }));
          setProductsList(updatedData);
          setOriginalProductsList(updatedData); 
          setLoading(false); 
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };
    getProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchImg(event.target.value);
    if (event.target.value === "") {
      
      setProductsList(originalProductsList);
    } else {
      
      const filteredList = originalProductsList.filter((product) =>
        product.description.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setProductsList(filteredList);
    }
  };

  return (
    <div>
      <div className="heading-part">
        <h1>
          <img
            src="https://i.ibb.co/r3wtKDf/icons8-image-gallery-64.png"
            alt="gallary"
            className="gallery"
          />{" "}
          Unplash Gallary
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
      {loading ? (
        <div className="loader">
          <img
            src="https://i.ibb.co/1Gv3bZb/loader.gif"
            alt="Loading..."
            className="loader-img"
          />
        </div>
      ) : (
        <div className="products-list">
          {productsList.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Allimages;
