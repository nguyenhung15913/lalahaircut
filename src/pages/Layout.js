import React from 'react'
import Home from "../pages/Home"
import Nav from "../components/Nav"
import About from '../pages/About';

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
        {/* Hours */}
        {/* Prices */}
        {/* Contact */}
    </div>
  
  )
}

export default Layout
