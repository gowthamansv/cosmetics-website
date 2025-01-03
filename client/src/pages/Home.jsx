import React from "react";
import { Link, Links } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "../assets/h-1.jpg";
import home2 from "../assets/h-2.jpg";
import home3 from "../assets/h-3.jpg";

const Home = () => {
  const items = [
    { title: "Our ionic Bodycream @ INR 191", src: home1, to: "log" },
    { title: "Our ionic Bodycream @ INR 192", src: home2, to: "log" },
    { title: "Our ionic Bodycream @ INR 193", src: home3, to: "log" },
  ];
  const settings = {
    dots: true,
    speed: 3000,
    autoplaySpeed: 6000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="flex items-center">
        <ul className="relative -top-[30px]">{dots}</ul>
      </div>
    ),
    // customPaging: (i) => (
    //   <div className="h-1 w-full bg-gray-400 transition duration-300 slick-active:bg-blue-500" />
    // ),
  };
  return (
    <div>
      <Slider {...settings} className="h-[80vh]">
        {items.map((item, index) => (
          <div key={index}>
            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[80vh] object-cover"
            />
            <div className="relative bottom-96 left-80 w-[450px]">
              <h2 className="text-white text-5xl flex text-justify my-5 italic">
                {item.title}
              </h2>
              <button className="rounded-2xl px-6 bg-black bg-opacity-60 text-white p-2 hover:text-black hover:bg-white hover:bg-opacity-60">
                <Link to={item.to}>shop now</Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex flex-col items-center w-full bg-red-500">
        <h2>What's New</h2>
      </div>
    </div>
  );
};

export default Home;
