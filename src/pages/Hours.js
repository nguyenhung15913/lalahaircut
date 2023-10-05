import React from 'react'
import "../css/Hours.css"
export default function Hours() {
  return (
    <div className='hours'>
          {/*first div */}
   <div className='mon'>
    <h1 className='montitle'>MONDAY</h1>
    <p1>10:00 AM TO 8:00 PM</p1>
   </div>
      {/*end of first div */}

 {/*second div */}
 <div className='tue'>
 <h2 className='tuetitle'>TUESDAY</h2>
    <p2>10:00 AM TO 8:00 PM</p2>
   </div>
      {/*end of second div */}

       {/*third div */}
   <div className='wed'>
   <h3 className='wedtitle'>WEDNESDAY</h3>
    <p3>10:00 AM TO 8:00 PM</p3>
   </div>
      {/*end of third div */}

       {/*fourth div */}
   <div className='thur'>
   <h4 className='thurtitle'>THURSDAY</h4>
    <p4 className='thurhour'>10:00 AM TO 8:00 PM</p4>
   </div>
      {/*end of fourth div */}


 {/*5th div */}
 <div className='fri'>
   <h5 className='frititle'>FRIDAY</h5>
    <p5 className='frihour' >10:00 AM TO 8:00 PM</p5>
   </div>
      {/*end of 5th div */}

       {/*6th div */}
 <div className='sat'>
   <h6 className='sattitle'>SATURDAY</h6>
    <p6 className='sathour' >10:00 AM TO 8:00 PM</p6>
   </div>
      {/*end of 6th div */}

       {/*7th div */}
 <div className='sun'>
   <h7 className='suntitle' >SUNDAY</h7><br></br>
    <p7 className='sunhour'>10:00 AM TO 8:00 PM</p7>
   </div>
      {/*end of 7th div */}
    </div>
  )
}
