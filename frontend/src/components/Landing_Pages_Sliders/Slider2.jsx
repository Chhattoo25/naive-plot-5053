import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './App.css';
import { dataDigitalBestSeller1 } from '../../pages/Navbar/data';
import { Link } from 'react-router-dom';

function Slider2() {
  
  const settings = {
    
    arrows: true,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    slidesToShow: 3,
        slidesToScroll: 1,

  };

  return (
    <div className="Slider1">
         <Slider {...settings}>
        {dataDigitalBestSeller1.map((item) => (
          <div className="card1">
            <div className="card-top1">
              <img
                src={item.linkImg}
                alt={item.title}
               
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom1">
              <h3>{item.description}</h3>
              <button><Link to="/womens/product">SHOP NOW</Link></button>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slider2;