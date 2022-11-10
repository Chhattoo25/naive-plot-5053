import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import b1 from '../../Images/b1.jpg'
import b2 from '../../Images/b2.jpg'
import b3 from '../../Images/b3.jpg'
function NextArrow(props) {
  // console.log("hello world")
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2.5rem",
        width: "2.5rem",
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
      }}
      onClick={onClick}
    />
  );
}

const SecondSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "80px" }}>
      <Slider {...settings}>
        <Box>
          <img
            src={b1}
            alt=""
            height="100%"
            width="100%"
          />
        </Box>
        <Box>
          <img
            src={b2}
            alt=""
            height="100%"
            width="100%"
          />
        </Box> 
        <Box>
          <img
            src={b3}
            alt=""
            height="100%"
            width="100%"
          />
        </Box>
      </Slider>
    </div>
  );
};

export default SecondSlider;


const Box = styled.div`
.popUp_2 {
  width: 71.375rem !important;
  height: 10rem;
  border-radius: 5px;
  flex-direction: row;
}

`