"use client"
import React from 'react';
import Slider from "react-slick/dist/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DentalSpa from "../../Data/DentalList.json";


function SliderHome() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        ]
    };

    const { services } = DentalSpa.hero5DentalSpa;

    return (
        <div className='align-middle w-[100vw] SliderMobileDisplay'>
            <Slider {...settings}>

            <div>
      <img src="/DentaSpa1.png" alt="Image 1" />
    </div>
    <div>
      <img src="/DentaSpa2.png" alt="Image 2" />
    </div>
    <div>
      <img src="/DentaSpa3.png" alt="Image 3" />
    </div>
    <div>
      <img src="/DentaSpa4.png" alt="Image 4" />
    </div>

            </Slider>
        </div>
    );
}

export default SliderHome;
