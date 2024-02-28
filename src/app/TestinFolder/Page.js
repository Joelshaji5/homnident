import React from 'react';
import Hero from '../Homepage/Hero';
import Hero2 from '../Homepage/Hero2';
import Hero3 from '../Homepage/Hero3';
import BookingForm from '../Components/FormContainer/CheckForm';
import Essentials from '../Homepage/Essentials';


const Page = () => {
    return (
        <div>
            <Hero />
            <BookingForm />
            <Hero2 />
            <Hero3 />
            <Essentials />

            {/* <Hero5Denatlspa />
      <SliderHome/>
      <Patienttestimonials /> */}
        </div>
    );
}

export default Page;
