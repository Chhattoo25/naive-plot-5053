
import React from 'react'
import Footer from '../../components/Navbar_Components/Footer'
import Header from '../../components/Navbar_Components/Header'
import Slider1 from '../../components/Landing_Pages_Sliders/Slider1'
import Slider2 from '../../components/Landing_Pages_Sliders/Slider2'
import Slider3 from '../../components/Landing_Pages_Sliders/slider3'
import Slider4 from '../../components/Landing_Pages_Sliders/Slider4'
import Slider5 from '../../components/Landing_Pages_Sliders/Slider5'
import Bottom from '../../components/Sliders/Bottom'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      {/* <Header/> */}
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
      <button className='landing_button'><Link to="/mens/product">SHOW MORE</Link></button>
      <div className='in_body_div1'>
        <heading>COMMUNITY POSTS</heading>
      </div>

      <Slider3/>
      <Bottom/>
      {/* <Footer/> */}
   
  
  
    </div>
  )
}

export default Body
