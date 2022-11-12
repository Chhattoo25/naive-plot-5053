import React from "react";
import Slider from "react-slick";
import Styles from './slider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";



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
        width: "3.0rem",
        padding:"0rem 0rem 0rem 1.5rem"


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
       padding:"0rem 1rem 0rem 0rem"
      }}
      onClick={onClick}
    />
  );
}

const ThirdSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <div className={Styles.slide_3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20221011-modesens-sale-364x484_1665469252.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>New to Sale</p>
            <p>Fresh Cut</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.slide_3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20221109-modesens-Bernardelli-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>ModeSens Fashion Guide</p>
            <p>2022 Summer Trends</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.slide_3}>
          <div>
            <img
              src=	"https://cdn.modesens.com/banner/20221110-modesens-SweaterWeather-364x484-F_1667895865.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Smart & Stylish</p>
            <p>Tech Accessories</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.slide_3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20221111-modesens-blog-364x484_1668151319.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Less Season and More Sizes</p>
            <p>Blog by SSENCE</p>
            <button>Read Now</button>
          </div>
        </div>
         <div className={Styles.slide_3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20221110-modesens-Platforms-364x484-F_1667895865.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Less Season and More Sizes</p>
            <p>Blog by SSENCE</p>
            <button>Read Now</button>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default ThirdSlider;

