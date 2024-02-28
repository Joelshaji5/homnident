"use client"
import React, { useState } from 'react';
import "../Style/Testinmonial.css";
import SliderMobilePR from "../Components/Slider/SliderMobilePR.js"

function Patienttestimonials() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  return (
    <div className={isSmallScreen ? 'testimonialDiv' : 'sliderContainer'}>
      {!isSmallScreen ? (
        <>
          <h1 className='testimonialHeading'>Patient testimonials</h1>
          <p className='testimonialPara'>Presenting the radiant smiles for our valued patients. We are dedicated to providing top-tier quality & care. Witnessing the joy in our patient’s smiles is our greatest reward.</p>
      
      
          <div className="atul">
            <div className="card">
              <h1 className='testimonialCardHeading'>Alka Pandey</h1>
              <p className='testimonialCardPara'>
                I have been undergoing dental treatment under Homnident. I find that getting the procedures done at home is very convenient as I can adjust time from my work from home schedule. Dr. Mahak takes time to explain all the procedures. She explains all the pros and cons of the treatment so that I can make an independent decision. Her assisting staff is also extremely helpful. She is an excellent doctor!!! Very thorough and caring. I recently had the teeth scaling and brightening treatment under her and am thrilled with the results. I am generally afraid of dental procedures but she's very sensitive to that and goes the extra mile to make you feel comfortable. I am now a permanent customer of Homnident clinic.
              </p>
              <p className='TestimonialCardGoogle'>Google Review</p>
            </div>
            <div className="card">
              <h1 className='testimonialCardHeading'>Uzair Shaikh</h1>
              <p className='testimonialCardPara'>
                Dr. Mahak is very good at her work, I am very much happy with the treatment she has done for me & my mother. She listens first carefully to your problem & concerns and then suggests the best suitable treatment plan & its cost accordingly.
              </p>
              <p className='TestimonialCardGoogle'>Google Review</p>
            </div>
            <div className="card">
              <h1 className='testimonialCardHeading'>Riya Nathani</h1>
              <p className='testimonialCardPara'>
                I was not sure if I'll get the treatment as u get at proper clinic but believe me it was way more better n easier..Dr Mahek and her team is amazing..Thank you for being so good 😊
              </p>
              <p className='TestimonialCardGoogle'>Google Review</p>
            </div>
            <div className="card">
              <h1 className='testimonialCardHeading'>Rohit Wakhare</h1>
              <p className='testimonialCardPara'>
                Mahak an exceptional dentist who deserves my highest praise! Not only did they skillfully fix my tooth with precision and care, but their warm and friendly demeanor made me feel comfortable throughout the entire process. I'm grateful for their expertise and grateful to have found such a talented professional. Thank you, for restoring my smile and providing an outstanding dental experience!"
              </p>
              <p className='TestimonialCardGoogle'>Google Review</p>
            </div>
          </div>
          <h1 className='testimonialSubHeading'>Homnident is all about creating smiles by winning hearts too!</h1>
          <button className='BookBtn'>Book A Consultation Now</button>
        </>
      ) : (
        <>
          <div className='testimonialHeadingDiv'>
            <h1 className='TestumonialMbH'>Patient testimonials</h1>
            <p className='TestumonialMbP'>Presenting the radiant smiles for our valued patients. We are dedicated to providing top-tier quality & care. Witnessing the joy in our patient’s smiles is our greatest reward.</p>
          </div>
          <SliderMobilePR />
        </>
      )}
    </div>
  );
}

export default Patienttestimonials;
