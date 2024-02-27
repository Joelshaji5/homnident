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
                {services.map((service, index) => (
    <div key={index} className='m-auto w-[400px] h-[244px] slider-item border-black' style={{ backgroundColor: `red'})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid black' }}>
    <h1>{service.title}</h1>
                        <h1>{service.title2}</h1>
                        <h1>{service.description}</h1>
                        {    console.log(service.image)
}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderHome;
