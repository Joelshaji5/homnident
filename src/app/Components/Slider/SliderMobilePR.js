import React from "react";
import Slider from "react-slick";
import "../../Style/SliderMobilePR.css"

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
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

  const testimonials = [
    {
      name: "Alka Pandey",
      content:
        "I have been undergoing dental treatment under Homnident. I find that getting the procedures done at home is very convenient as I can adjust time from my work from home schedule. Dr. Mahak takes time to explain all the procedures. She explains all the pros and cons of the treatment so that I can make an independent decision. Her assisting staff is also extremely helpful. She is an excellent doctor!!! Very thorough and caring. I recently had the teeth scaling and brightening treatment under her and am thrilled with the results. I am generally afraid of dental procedures but she's very sensitive to that and goes the extra mile to make you feel comfortable. I am now a permanent customer of Homnident clinic.",
    },
    {
      name: "Uzair Shaikh",
      content:
        "Dr. Mahak is very good at her work, I am very much happy with the treatment she has done for me & my mother. She listens first carefully to your problem & concerns and then suggests the best suitable treatment plan & its cost accordingly.",
    },
    {
      name: "Riya Nathani",
      content:
        "I was not sure if I'll get the treatment as u get at proper clinic but believe me it was way more better n easier..Dr Mahek and her team is amazing..Thank you for being so good 😊",
    },
    {
      name: "Rohit Wakhare",
      content:
        "Mahak an exceptional dentist who deserves my highest praise! Not only did they skillfully fix my tooth with precision and care, but their warm and friendly demeanor made me feel comfortable throughout the entire process. I'm grateful for their expertise and grateful to have found such a talented professional. Thank you, for restoring my smile and providing an outstanding dental experience!",
    },
  ];
  


  return (
    <div className="slider-container w-[90vw] m-auto">
      <Slider {...settings}>
        

      {
        testimonials.map((TestimonialReview)=>{

            return(

                <div  className="DivSliderMobilePR">
                    {console.log(TestimonialReview)}
                <h1 className="testinmonialReviewH">{TestimonialReview.name}</h1>
                <p className="testinmonialReviewP">{TestimonialReview.content}</p>
                <ul>
                    <li className="testinmonialReviewLi">Google Review</li>
                </ul>
                </div>
           
            )
        })
      }


      </Slider>
      <h1 className="testinmonialReviewHAFterSlider">Homnident is all about creating smiles by winning hearts too !</h1>
      <button className="testinmonialReviewHAFterBtn">Book A Consultation Now</button>
    </div>
  );
}

export default Responsive;
