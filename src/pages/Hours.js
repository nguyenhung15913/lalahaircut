import React from 'react'
import "../css/Hours.css"
export default function Hours() {
  return (
    <div id="hour" className='hours'>
          {/*first div */}
   <div className='day'>
    <h1 className='montitle'>MON</h1>
    <p className='sathour' >10:00 AM</p>
    <p>To</p>
    <p>8:00 PM</p>
   </div>
      {/*end of first div */}

 {/*second div */}
 <div className='day'>
 <h1 className='tuetitle'>TUE</h1>
 <p className='sathour' >10:00 AM</p>
    <p>To</p>
    <p>8:00 PM</p>
   </div>
      {/*end of second div */}

       {/*third div */}
   <div className='day'>
   <h1 className='wedtitle'>WED</h1>
   <p className='sathour' >10:00 AM</p>
    <p>To</p>
    <p>8:00 PM</p>
   </div>
      {/*end of third div */}

       {/*fourth div */}
   <div className='day'>
   <h1 className='thurtitle'>THUR</h1>
   <p className='sathour' >10:00 AM</p>
    <p>To</p>
    <p>8:00 PM</p>
   </div>
      {/*end of fourth div */}


 {/*5th div */}
 <div className='day'>
   <h1 className='frititle'>FRI</h1>
   <p className='sathour' >10:00 AM</p>
    <p>To</p>
    <p>8:00 PM</p>

   </div>
      {/*end of 5th div */}

       {/*6th div */}
 <div className='day'>
   <h1 className='sattitle'>SAT</h1>
    <p className='sathour' >10:00 AM</p>
    <p>To</p>
    <p>8:00 PM</p>
   </div>
      {/*end of 6th div */}

       {/*7th div */}
 <div className='day'>
   <h1 className='suntitle' >SUN</h1>
    <p className='sathour' >10:00 AM</p>
    <p>To</p>
    <p>8:00 PM</p>
   </div>
      {/*end of 7th div */}
    </div>
  )
}
