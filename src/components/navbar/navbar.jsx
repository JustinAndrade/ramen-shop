import React from "react";

import logo from "../../assets/img/lion-header.png";

import "./index.scss";

const Navbar = () => {
  const openMobile = () => {
    const menu = document.querySelector(".mobile-menu");
    const open = document.querySelector(".open");
    const close = document.querySelector(".close");
    if (menu.style.display === "none") {
      menu.style.display = "block";
      open.style.display = "none";
      close.style.display = "block";
    } else {
      menu.style.display = "none";
      close.style.display = "none";
      open.style.display = "block";
    }
  };
  return (
    <div className="top-bar">
      <nav className="desktop-menu">
        <a href="">Home</a>
        <a href="">Menu</a>
        <a href="">Order</a>
        <div style={{ display: "flex" }}>
          <img src={logo} alt="" />
          <h1>
            Jade <br /> Garden
          </h1>
        </div>
        <a href="">Catering</a>
        <a href="">About</a>
        <a href="">Location</a>
        <svg
          className="loc"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
      </nav>
      <div className="mobile-nav" onClick={openMobile}>
        <div style={{ display: "flex" }}>
          <img src={logo} alt="" />
          <h1>
            Jade <br /> Garden
          </h1>
        </div>
        <svg className="open" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <svg
          className="close"
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          enable-background="new 0 0 512.001 512.001"
          height="40"
          viewBox="0 0 512.001 512.001"
          width="40"
        >
          <g>
            <path d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z" />
          </g>
        </svg>
        <div className="mobile-menu">
          <nav>
            <a href="">Home</a>
            <a href="">Menu</a>
            <a href="">Order</a>
            <a href="">Catering</a>
            <a href="">About</a>
            <a href="">Location</a>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
