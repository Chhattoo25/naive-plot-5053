import React  from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './App.css';
import { dataDigitalBestSeller5 } from '../../pages/Navbar/data';
// import imgGirl from './assets/images/defaultImage.jpg';

function Slider5() {
  // const [defaultImage, setDefaultImage] = useState({});
  const settings = {
  
    arrows: true,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 4,
  };



  return (
    <div className="Slider5">
      <Slider {...settings}>
        {dataDigitalBestSeller5.map((item) => (
          <div className="card5">
            <div className="card-top5">
              <img
                src={item.linkImg}
                alt={item.title}/>
            </div>
            <div className='slider_titles'>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <h2>{item.discount_price}<span>-{item.price}</span></h2>
                <footer>{item.compare}</footer>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slider5;