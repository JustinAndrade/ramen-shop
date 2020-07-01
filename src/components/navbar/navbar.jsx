import React from "react";

import navRamen from "../../assets/img/lion-header.png";

import "./index.scss";

const Navbar = () => {
  return (
    <div className="top-bar">
      <nav>
        <a href="">Home</a>
        <span></span>
        <a href="">Menu</a>
        <a href="">Order</a>
        <div style={{ display: "flex" }}>
          <img src={navRamen} alt="" />
          <h1>
            Jade <br /> Garden
          </h1>
        </div>
        <a href="">Catering</a>
        <a href="">About</a>
        <a href="">Location</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
      </nav>
    </div>
  );
};
export default Navbar;
