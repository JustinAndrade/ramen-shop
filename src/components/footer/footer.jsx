import React from "react";

import navRamen from "../../assets/img/lion-header.png";

import "./index.scss";

const Footer = () => {
  return (
    <div style={{ background: "#670b15" }}>
      <div className="footer">
        <div className="logo">
          <img src={navRamen} alt="" />
          <h1>
            Jade <br /> Garden
          </h1>
        </div>
        <div>
          <p>Subcribe for deals. offers and upcoming events</p>
        </div>
        <div className="nav-container">
          <nav>
            <div>
              <a href="">HOME</a>
              <a href="">MENU</a>
            </div>
            <div>
              <a href="">ORDER</a>
              <a href="">CATERING</a>
            </div>
            <div>
              <a href="">LOCATION</a>
              <a href="">ABOUT</a>
            </div>
          </nav>
        </div>
      </div>
      <div className="bot-bar">
        <div className="input-container">
          <input type="text" placeholder="Enter your email" />
          <div className="email-btn">
            <svg
              version="1.1"
              height="24px"
              width="24px"
              viewBox="0 0 512 512"
              space="preserve"
              fill="#fff"
            >
              <g>
                <g>
                  <path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106    C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z     M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787    L338.213,256L482,112.212V399.787z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
        </div>
        <div className="icons">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#ffad32"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
          </div>
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Bold"
              enable-background="new 0 0 24 24"
              height="48"
              viewBox="0 0 24 24"
              width="48"
              fill="#ffad32"
            >
              <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
            </svg>
          </div>
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 512.00096 512.00096"
              width="48"
              fill="#ffad32"
            >
              <path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" />
              <path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" />
              <path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
