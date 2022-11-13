
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
      <Slider2/>
      <Slider3/>
      <Slider4/>
  <Slider5/>
  
    </div>
  )
}

export default Body
