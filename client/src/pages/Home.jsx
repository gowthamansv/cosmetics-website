import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "../assets/h-1.jpg";
import home2 from "../assets/h-2.jpg";
import home3 from "../assets/h-3.jpg";
import new1 from "../assets/n1.jpg";
import new2 from "../assets/n2.jpg";
import new3 from "../assets/n3.jpg";
import new4 from "../assets/n4.jpg";
import c1 from "../assets/c-1.png";
import c2 from "../assets/c-2.png";
import c3 from "../assets/c-3.png";
import c4 from "../assets/c-4.png";
import Cart from "./Cart.jsx";
import Menu from "./Menu.jsx";
import icon1 from "../assets/h-5.png";
import icon2 from "../assets/h-6.png";
import icon3 from "../assets/h-7.png";
import aboutimage from "../assets/h-8.png";
import storyimage from "../assets/h-9.png";

const Home = ({ showCart, setShowCart, showMenu }) => {
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
  };
  return (
    <div>
      <Slider {...settings} className="h-[92vh]">
        {items.map((item, index) => (
          <div className="relative">
            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[92vh] object-cover"
            />
            <div className="absolute inset-0 bg-darker bg-opacity-80"></div>
            <div className="absolute flex flex-col top-1/2 transform -translate-y-1/2 justify-center items-center w-full">
              <h2 className="text-white font-valky w-[250px] mobile:w-[500px] text-5xl text-center my-5 italic">
                {item.title}
              </h2>
              <button className="rounded-2xl px-6 bg-black bg-opacity-60 text-white p-2 hover:text-black hover:bg-white hover:bg-opacity-60">
                <Link to={item.to}>View Collection</Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex flex-col gap-10 mobile:p-20 p-10 bg-bg">
        <div className="flex justify-center items-center">
          <h2 className="font-valky text-3xl text-center leading-10 tracking-wide mobile:w-2/3">
            Our natural skincare products are crafted with cutting-edge green
            science and innovative ingredients to provide the ultimate luxury
            skincare experience.
          </h2>
        </div>
        <div className="flex flex-col mobile:flex-row justify-center items-center gap-10">
          <div className="flex gap-4 justify-center items-center">
            <img src={icon1} alt="" className="w-8 h-8" />
            <p className="font-montserrat w-40">Long-lasting and sustainable</p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img src={icon2} alt="" className="w-8 h-8" />
            <p className="font-montserrat w-40">
              lovingly crafted for all bodies
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img src={icon3} alt="" className="w-8 h-8" />
            <p className="font-montserrat w-40">Unbeatably comfortable </p>
          </div>
        </div>
      </div>
      <div className="bg-darker bg-opacity-80 justify-center items-center gap-10 flex flex-col p-10 mobile:flex-row mobile:p-20">
        <div className="flex flex-col gap-5 text-white justify-center items-center mobile:w-[80vh] mobile:h-[40vh]">
          <h2 className="font-valky text-4xl text-center leading-10 tracking-wide">
            Fab Vitamin C Body Cream For Skin Whitening
          </h2>
          <p className="font-montserrat w-2/3 text-center">
            The point of using Lorem Ipsum is that it has a more- or-less normal
            distributin of letters
          </p>
          <button className="rounded-2xl px-6 bg-black bg-opacity-60 text-white p-2 hover:text-black hover:bg-white hover:bg-opacity-60">
            shop now
          </button>
        </div>
        <img
          src={aboutimage}
          alt=""
          className="mobile:w-[70vh] mobile:h-[40vh] object-cover"
        />
      </div>
      <div className="flex flex-col items-center w-full mobile:p-5 p-2 bg-bg">
        <h2 className="text-5xl mobile:text-7xl font-valky text-center justify-center my-5">
          What's New
        </h2>
        <div className="grid grid-cols-2 mobile:grid-flow-col gap-2 mobile:gap-10 py-5">
          <div className="flex flex-col w-44 mobile:w-52 bg-white">
            <div>
              <img
                src={new1}
                alt="new"
                className="w-44 mobile:w-52 h-56 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 m-1">
              <h3 className="font-thin text-lg">Fall Resist Scalp Tonic</h3>
              <p>
                Rs. 851{" "}
                <span className="line-through text-gray-700/80">Rs. 999</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-44 mobile:w-52 bg-white">
            <div>
              <img
                src={new2}
                alt="new"
                className="w-44 mobile:w-52 h-56 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 m-1">
              <h3 className="font-thin text-lg">Fall Resist Scalp Tonic</h3>
              <p>
                Rs. 851{" "}
                <span className="line-through text-gray-700/80">Rs. 999</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-44 mobile:w-52 bg-white">
            <div>
              <img
                src={new3}
                alt="new"
                className="w-44 mobile:w-52 h-56 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 m-1">
              <h3 className="font-thin text-lg">Fall Resist Scalp Tonic</h3>
              <p>
                Rs. 851{" "}
                <span className="line-through text-gray-700/80">Rs. 999</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-44 mobile:w-52 bg-white">
            <div>
              <img
                src={new4}
                alt="new"
                className="w-44 mobile:w-52 h-56 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 m-1">
              <h3 className="font-thin text-lg">Night Restorative Treatment</h3>
              <p>
                Rs. 851{" "}
                <span className="line-through text-gray-700/80">Rs. 999</span>
              </p>
            </div>
          </div>
        </div>
        <button className="rounded-2xl px-6 bg-black bg-opacity-60 text-white p-2 hover:text-black hover:bg-white hover:bg-opacity-60">
          shop now
        </button>
      </div>
      <div className="bg-darker bg-opacity-80 justify-center items-center gap-10 flex flex-col mobile:flex-row p-10 mobile:p-20">
        <div className="flex flex-col gap-5 text-white justify-center items-center mobile:w-[80vh] mobile:h-[40vh]">
          <h2 className="font-valky text-4xl text-center leading-10 tracking-wide">
            Our Story
          </h2>
          <p className="font-montserrat  text-center">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself.
          </p>
          <a className="underline">
            <Link>Read More</Link>
          </a>
        </div>
        <img
          src={storyimage}
          alt=""
          className="mobile:w-[70vh] mobile:h-[40vh] object-cover"
        />
      </div>
      <div className="flex flex-col items-center w-full p-2 mobile:px-36 bg-bg">
        <div className="flex justify-between w-full items-center">
          <h2 className="text-4xl font-valky my-5">Shop by Categories</h2>
          <a>
            <Link>See All</Link>
          </a>
        </div>
        <div className="grid grid-cols-2 mobile:grid-flow-col mobile:grid-cols-3 w-full mobile:py-5">
          <div className="flex flex-col w-44 mobile:w-52 items-center">
            <div>
              <img
                src={c3}
                alt="new"
                className="w-44 mobile:w-52 h-64 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 m-5">
              <h3 className="font-thin text-lg">SERUM</h3>
            </div>
          </div>
          <div className="flex flex-col w-44 mobile:w-52 items-center">
            <div>
              <img
                src={c4}
                alt="new"
                className="w-44 mobile:w-52 h-64 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 m-5">
              <h3 className="font-thin text-lg">BODY WASH</h3>
            </div>
          </div>
          <div className="flex flex-col w-44 mobile:w-52 items-center">
            <div>
              <img
                src={c1}
                alt="new"
                className="w-44 mobile:w-52 h-64 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 m-5">
              <h3 className="font-thin text-lg">FACE WASH</h3>
            </div>
          </div>
          <div className="flex flex-col w-44 mobile:w-52 items-center">
            <div>
              <img
                src={c2}
                alt="new"
                className="w-44 mobile:w-52 h-64 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 m-5">
              <h3 className="font-thin text-lg">CLEANSER</h3>
            </div>
          </div>
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showMenu && <Menu />}
    </div>
  );
};

export default Home;
