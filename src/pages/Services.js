import React from 'react'
import "../css/Services.css"
export default function Services() {
  return (
    <div className='service'>
        
    {/*first div */}
   <div className='firstservice'>
    <div>
    <img
            className="frame-child"
            alt=""
            src={require(`./../images/haircut.jpg`)}
          />
    </div>
    <div>
      Classic haircut
    </div>
   </div>
      {/*end of first div */}

 {/*second div */}
 <div className='secondservice'>
    <div>
    <img
            className="frame-child"
            alt=""
            src={require(`./../images/dyehair.jpg`)}
          />
    </div>
    <div>
      Colouring
    </div>
   </div>
      {/*end of second div */}

       {/*third div */}
   <div className='thirdservice'>
    <div>
    <img
            className="frame-child"
            alt=""
            src={require(`./../images/perm.jpg`)}
          />
    </div>
    <div>
      Perm Hair
    </div>
   </div>
      {/*end of third div */}

       {/*fourth div */}
   <div className='fourthservice'>
    <div>
    <img
            className="frame-child"
            alt=""
            src={require(`./../images/texture.jpg`)}
          />
    </div>
    <div>
      Texturizing
    </div>
   </div>
      {/*end of fourth div */}

    </div>
  )
}
