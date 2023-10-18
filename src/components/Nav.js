import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div>

      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#gallery">Photo Gallery</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#hour">Hours</a>
        </li>
        <li>
          <a href="#prices">Prices</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
