import React  from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './App.css';
// import div1 from './div1';
import { dataDigitalBestSeller3 } from '../../pages/Navbar/data';

function Slider3() {
  
  const settings = {
    
    arrows: true,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    slidesToShow: 4,
        slidesToScroll: 1,

  };

  return (
    <div className="Slider1">
         <Slider {...settings}>
        {dataDigitalBestSeller3.map((item) => (
          <div className="card2">
            <div className="card-top2">
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

export default Slider3;