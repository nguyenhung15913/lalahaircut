import React from 'react'
import "./Home.css"

function Home () {
  return (
    <div className='home'>
      <img src='/Banner.jpg' />

      <div className='popup-name'>
          <h1>La La HairCut</h1>
          <p>3001 26 Ave SW, Calgary, AB</p>
          <p> T3E 0M7</p>
      </div>

      <div className='Slogan'>
          <h1>REVEAL YOUR BEAUTY</h1>
          <h2>BOOK AN APPOINTMENT AND WE’LL TAKE CARE OF THE REST</h2>
          <p>Duis autem vel eum iriure dolor in hendrerit in putate velit esse molestie consequat, vel illum doloreeu feugiat</p>
      </div>
    </div>
  )
}

export default Home
