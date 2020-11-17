import React from "react";
import { Link } from "react-router-dom";

import "../static/styles/components/Header.css";

function Header() {
  return (
    <header className="header py-4 ">
      <div className="d-flex justify-content-between align-items-center container">
        <div className="logo">
          <Link to="/">
            <h3 className="unstyled-text">
              <strong>Where in the world?</strong>
            </h3>
          </Link>
        </div>
        <div className="toggle-container">
          <button id="toggle" className="toggle">
            <span id="toggle-ball" className="toggle-ball off"></span>
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
