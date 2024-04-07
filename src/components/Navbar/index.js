import React from 'react'
import "./index.css"

function Navbar() {
  return (
    <div>
    <div className="nav-items">
        
        <div>
        <img src="https://i.ibb.co/2s9BMMk/Logo-app.png" alt="Logo-app" className="logo-app" border="0"/>
        </div>
        <div>
            <p className="logo"> Logo </p>
        </div>
        <div className="icons">
        <img src="https://i.ibb.co/VMpFkxR/search-normal.png" alt="icon-img" className="icon-image" border="0"/>
        <img src="https://i.ibb.co/BrqXvQ4/heart-size.png" alt="icon-img" className="icon-image" border="0"/>
        <img src="https://i.ibb.co/BB9qLv2/shopping-bag.png" alt="icon-img" className="icon-image" border="0"/>
        <img src="https://i.ibb.co/vkrfwq8/profile-eshop.png" alt="icon-img" className="icon-image"/>
        <img src="https://i.ibb.co/M9dR76b/Language.png" alt="icon-img" className="icon-image" border="0"/>
        </div>
    
    </div>
    <div className="sub-container">
        <p className="sub-secs">
            SHOP
        </p>
        <p className="sub-secs">
            SKILLS
        </p>
        <p className="sub-secs">
            STORIES

        </p>
        <p className="sub-secs">
            ABOUT
        </p>
        <p className="sub-secs">
            CONTACTUS
        </p>

    </div>


    </div>
  )
};

export default Navbar;

