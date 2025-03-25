import React from "react";
import "../App.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 IronPages App. All rights reserved.</p>
      <div className="footer-links">
        <a
          href="https://github.com/refinejcode49/front-end-project2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Frontend Repository
        </a>
        <a
          href="https://github.com/ecastanedam/json-server-backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Backend Repository
        </a>
      </div>
    </footer>
  );
};

export default Footer;
