import React from "react";
import "../css/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const facebookURL = "https://www.facebook.com/your-facebook-profile";
  const instagramURL =
    "https://www.instagram.com/lalahairyyc/?igshid=NGVhN2U2NjQ0Yg%3D%3D";
  const twitterURL = "https://www.twitter.com/your-twitter-profile";

  return (
    <div className="social-media-links">
      <a href={facebookURL} target="_blank" rel="noopener noreferrer">
        <FaFacebook className="social-icon" />
      </a>
      <a href={instagramURL} target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <a href={twitterURL} target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon" />
      </a>
    </div>
  );
}
