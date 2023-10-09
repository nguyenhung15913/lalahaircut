import React from 'react'
import Home from "../pages/Home"
import Nav from "../components/Nav"
import About from '../pages/About';
import Services from "../pages/Services"
import Hours from "../pages/Hours"

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
        {/* Hours */}
        <Hours />
        {/* Prices */}
        {/* Contact */}
    </div>
  
  )
}

export default Layout
