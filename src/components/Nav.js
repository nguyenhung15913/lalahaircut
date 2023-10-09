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
          <a href="/gallery">Photo Gallery</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Hours</a>
        </li>
        <li>
          <a href="/">Prices</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
