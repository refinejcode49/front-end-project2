import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <div> IronPages App  </div>
        </Link>
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