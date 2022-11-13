
import React from 'react'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './slider3'
import Slider4 from './Slider4'
import Slider5 from './Slider5'

const Body = () => {
  return (
    <div>
      <Slider1/>
      <div className='in_body_div1'>
          <heading>Featured Brands</heading>
          <p>Get the look you want. Choose from over 12,000+ brands and designers.</p>

          {/* <heading>Special Offers</heading> */}
      </div>
      <Slider4/>
      <div className='in_body_div1'>
        <heading>SPECIAL OFFERS</heading>
      </div>
      <Slider2/>
      <div className='in_body_div1'>
        <heading>TRENDING NOW</heading>
      </div>
      <Slider5/>
      <button className='landing_button'>SHOP MORE</button>
      <div className='in_body_div1'>
        <heading>COMMUNITY POSTS</heading>
      </div>
      <Slider3/>
   
  
  
    </div>
  )
}

export default Body
