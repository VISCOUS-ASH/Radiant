import React from 'react'
import "./Navbar.scss"
import IMAGE from "../../assets/IMAGE.png"
import { useState } from 'react'
const Navbar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div >
       <nav className="navbar">
        {/* <img src={IMAGE} alt="search_image" /> */}
        <input
          type="text"
          className={`navbar__search ${inputValue ? 'has-value' : ''}`}
          value={inputValue}
          placeholder=" "
          onChange={handleChange}
        />
        <div className="navbar__links">
          <a href="#" className="navbar__link">Categories</a>
          <a href="#" className="navbar__link">Website Builders</a>
          <a href="#" className="navbar__link">Today's Deal</a>
        </div>
      </nav>
      </div>
  )
}

export default Navbar