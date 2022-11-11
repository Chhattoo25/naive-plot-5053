import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import { dataDigitalBestSeller } from './data';
// import imgGirl from './assets/images/defaultImage.jpg';

function Slider2() {
  // const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    // dots: true,
    // infinite:true,
    // speed:100,
    // autoplay:true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // initialSlide: 0,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };



  return (
    <div className="Slider">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={item.linkImg}
                alt={item.title}/>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slider2;