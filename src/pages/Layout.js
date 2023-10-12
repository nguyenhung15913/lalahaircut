import React from "react";
import Home from "../pages/Home";
import Nav from "../components/Nav";
import About from "../pages/About";
import Services from "../pages/Services";
import Hours from "../pages/Hours";
import Prices from "../pages/Prices";
import Footer from "../components/Footer";
import PhotoGallery from "./PhotoGallery";

function Layout() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* Home */}
      <Home />
      {/* About */}
      <About />
      {/* Services */}

      <Prices />
      <Services />
      <PhotoGallery />
      
      {/* Hours */}
      <Hours />
      {/* Prices */}
      {/* Contact */}
      <Footer />
    </div>
  );
}

export default Layout;
