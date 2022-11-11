import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import a1 from '../../Images/a1.jpg'
import a2 from '../../Images/a2.jpg'
import a3 from '../../Images/a3.jpg'
import a4 from '../../Images/a4.jpg'
import a5 from '../../Images/a5.jpg'
import a6 from '../../Images/a6.jpg'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2.5rem",
        width: "2.0rem",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2.5rem",
        width: "2.5rem",
        marginRight:"2rem"
      }}
      onClick={onClick}
    />
  );
}
const TopSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
                     {
                       breakpoint: 1024,
                       settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         infinite: true,
                         dots: true
                       }
                     },
                     {
                       breakpoint: 600,
                       settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                         initialSlide: 2
                       }
                     },
                     {
                       breakpoint: 480,
                       settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                       }
                     }
                   ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "20px" }}>
      <Slider {...settings}>
        <BOX>
          <img
            src={a1}
            alt=""
            height="100%"
           
//             style={{width:"80%" , margin:'auto' }}
          />
        </BOX>
        <BOX>
          <img
            src={a2}
            alt=""
            height="100%"
            width="100%"
            // style={{ margin: "auto", marginTop: "15px" }}
          />
        </BOX>
        <BOX>
          <img
            src={a3}
            alt=""
            height="100%"
            width="100%"
            // style={{ margin: "auto", marginTop: "15px" }}
          />
        </BOX> 
          <BOX>
          <img
            src={a4}
            alt=""
            height="100%"
            width="100%"
            // style={{ margin: "auto", marginTop: "15px" }}
          />
        </BOX>  
        <BOX>
          <img
            src={a5}
            alt=""
            height="100%"
            width="100%"
            // style={{ margin: "auto", marginTop: "15px" }}
          />
        </BOX> 
         <BOX>
          <img
            src={a6}
            alt=""
            height="100%"
            width="100%"
            // style={{ margin: "auto", marginTop: "15px" }}
          />
        </BOX>
      </Slider>
    </div>
  );
};

export default TopSlider;

const BOX = styled.div`
  width: 61.375rem   ;
  height: 25rem;
  margin: auto;
  border-radius: 5px;
  flex-direction: row;
`;


// const Heading = styled.h1`
// color:green;
// font-size: 200px;
// `