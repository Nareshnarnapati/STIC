import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import Navbar from "../Navbar";
import Category from "../Category";

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
        'https://fakestoreapi.com/products'
        const response = await fetch(apiUrl);
        if (response.ok) {
          const fetchedData = await response.json();
          const updatedData = fetchedData.map((product) => ({
            id: product.id,
            title: product.title,
            image: product.image,
            price:product.price,
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
      <Navbar/>
      
      <div className="heading-part">
        <h1>
          Discover Our Products
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        
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
      
      <div className="below-section">
<div className="filter-con">
 <p className="items">3425 ITEMS</p>
    <div className="arrow-arrange">
    <img src="https://i.ibb.co/chZJKmX/arrow-left.png" alt="arrow-left" className="arrow" />
    <p className="hiden-filter">HIDEN FILTER</p>
    </div>
</div>
    <div className="second-part">
    <p className="items">RECOMMENDED </p> 
    <img src="https://i.ibb.co/d6MVvYt/arrow-down.png" alt="arrow-down" className="arrow"/>
    </div>
      </div>
      </div>


      
<div className="side-flex">
<div className="Sidebar">
  <Category/>
</div>
   <div className="products-top">
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
</div>
<footer className="footer">
  <div>
  <div className="footer-con">
    <div>
    <h1 className= "footer-head">
      BE THE FIRST TO KNOW
    </h1>
    <p className="footer-para">
      sign up for metts musse.
    </p>
    <div className="input-btn">
      <input type="text" placeholder="Enter your mail..." className="input-con"/>
      <button className="button2">SUBSCRIBE</button>
    </div>
  </div>
  <div>
    <h1 className= "footer-head">
      CONTACT US
    </h1>
    <p className="footer-para">
      +44 213 366 5360
    </p>
    <p className="footer-para">
      customercare@gmail.com
    </p>
    <h1 className= "footer-head">
      CURRENCY
    </h1>
    <div className="usa-btn">
    <img src="https://i.ibb.co/QMQV1pf/United-States-of-America-US.png" alt="usa" className="usa-img"/>
    <p className="footer-para"> 
      *USA
    </p>
    </div>
    <p className="footer-para">
    Transactions will be completed in Euros and a currency reference is available on hover.
    </p>
  </div>
  </div>
 <hr className="h-line"/>
 <div className="bottom-con">
  <div>
    <h1 className="footer-head">
      metta musse
    </h1>
    <p className="footer-para">
      About us
    </p>
    <p className="footer-para">
      Stories
    </p>
    <p className="footer-para">
      Artisans
    </p>
    <p className="footer-para">
      Boutiques
    </p>
    <p className="footer-para">
      Contact US
    </p>
    <p className="footer-para">
      EU Compliance Dcos
    </p>
  </div>
  <div>
    <h1 className="footer-head">
      QUICL LINKS
    </h1>
    <p className="footer-para">
      Orders&Shipping
    </p>
    <p className="footer-para">
      Join/Login as Seller
    </p>
    <p className="footer-para">
      Payment&Pricing
    </p>
    <p className="footer-para">
      Returns&Refunds
    </p>
    <p className="footer-para">
      FAQs
    </p>
    <p className="footer-para">
      Privacy Policy
    </p>
    <p className="footer-para">
      Terms & Conditions
    </p>
  </div>
  <div className="bottom-space">
    <h1 className="footer-head">
      FOLLOW US
    </h1>
    <div>
    <img src="https://i.ibb.co/Bt1bBZP/Frame-28.png" alt="Frames"/>
    </div>
    <div>
    <p className="footer-para">
      metta musse
    </p>
    <img src="https://i.ibb.co/q9nt4y4/icons-pattern.png" alt="icons-pattern"/>
    </div>
  </div>
 </div>
 </div>
</footer>
      </div>

);
};

export default Allimages;