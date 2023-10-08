import React from 'react'
import "../css/Hours.css"
export default function Hours() {
  return (
    <div className='hours'>
          {/*first div */}
   <div className='day'>
    <h1 className='montitle'>MONDAY</h1>
    <p>10:00 AM TO 8:00 PM</p>
   </div>
      {/*end of first div */}

 {/*second div */}
 <div className='day'>
 <h1 className='tuetitle'>TUESDAY</h1>
    <p>10:00 AM TO 8:00 PM</p>
   </div>
      {/*end of second div */}

       {/*third div */}
   <div className='day'>
   <h1 className='wedtitle'>WEDNESDAY</h1>
    <p>10:00 AM TO 8:00 PM</p>
   </div>
      {/*end of third div */}

       {/*fourth div */}
   <div className='day'>
   <h1 className='thurtitle'>THURSDAY</h1>
    <p className='thurhour'>10:00 AM TO 8:00 PM</p>
   </div>
      {/*end of fourth div */}


 {/*5th div */}
 <div className='day'>
   <h1 className='frititle'>FRIDAY</h1>
    <p className='frihour' >10:00 AM TO 8:00 PM</p>
   </div>
      {/*end of 5th div */}

       {/*6th div */}
 <div className='day'>
   <h1 className='sattitle'>SATURDAY</h1>
    <p className='sathour' >10:00 AM TO 8:00 PM</p>
   </div>
      {/*end of 6th div */}

       {/*7th div */}
 <div className='day'>
   <h1 className='suntitle' >SUNDAY</h1>
    <p className='sunhour'>10:00 AM TO 8:00 PM</p>
   </div>
      {/*end of 7th div */}
    </div>
  )
}
