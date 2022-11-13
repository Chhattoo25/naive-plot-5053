import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './App.css';
import { dataDigitalBestSeller4 } from '../../pages/Navbar/data';

function Slider4() {
  
  const settings = {
    
    arrows: true,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    slidesToShow: 1,
        slidesToScroll: 1,

  };

  return (
    <div className="Slider4">
         <Slider {...settings}>
        {dataDigitalBestSeller4.map((item) => (
          <div className="card4">
            <div className="card-top4">
              <img
                src={item.linkImg}
                alt={item.title}
               
              />
           
            </div>
   
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slider4;