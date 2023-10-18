import React from 'react'
import PhotoGallery from "./PhotoGallery";
import Services from "../pages/Services";
import Prices from "../pages/Prices";
import "./BackgroundContainer.css"

function BackgroundContainer() {
  return (
    <div className='background-container'>
       <Prices />
      <Services />
      <PhotoGallery />
    </div>
  )
}

export default BackgroundContainer
