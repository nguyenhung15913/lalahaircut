import React from "react";
import Home from "../pages/Home";
import Nav from "../components/Nav";
import About from "../pages/About";
import Services from "../pages/Services";
import Hours from "../pages/Hours";
import Footer from "../components/Footer";
import PhotoGallery from "./PhotoGallery";
import Contact from "../pages/Contact"

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

    
      <Services />
      <PhotoGallery />
      
      {/* Hours */}
      <Hours />
      {/* Prices */}
      {/* Contact */}
      <Contact />
      <Footer /> 
    </div>
  );
}

export default Layout;
