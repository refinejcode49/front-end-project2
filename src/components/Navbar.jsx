import React from "react";
import { Link } from "react-router-dom";



const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <div> 
            <p className="title">IronPages App</p>  
          </div>
        </Link>
        {/*button to toggle dark mode*/}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search books..." />
          <button>Search</button>
        </div>
        <Link to="/about" className="about-link">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;