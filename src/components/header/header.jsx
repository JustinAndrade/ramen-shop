import React from "react";

import navRamen from "../../assets/img/nav-ramen.png";
import lionHeader from "../../assets/img/header.png";

import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div class="h-imgs">
        <img className="ramen" src={navRamen} alt="" />
      </div>
      <header>
        <h2>
          It's that <br /> simple.
        </h2>
        <p>FEATURING OUR NEW SPRING SPECIALS.</p>
        <div className="btn-container">
          <div>Details</div>
          <div className="h-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
