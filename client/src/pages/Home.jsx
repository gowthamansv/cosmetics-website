import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "../assets/h-1.jpg";
import home2 from "../assets/h-2.jpg";
import home3 from "../assets/h-3.jpg";

const Home = () => {
  const images = [home1, home2, home3];
  const settings = {
    dots: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="h-[80vh]">
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[80vh] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
