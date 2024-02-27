"use client"

import Image from 'next/image'
import Hero from './Hero'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero5Denatlspa from './hero5Denatlspa'
import Form from './Form'
import Patienttestimonials from './Patienttestimonials'
import Footer from '../Components/Footer/Footer'
import SliderHome from '../Components/Slider/SliderHome'
import Essentials from './Essentials'
import BookingForm from '../Components/FormContainer/CheckForm'
export default function Homepage() {
  return (
    <div>
      <Hero />
      <BookingForm />
      <Hero2 />
      <Hero3 />
      <Essentials />

      <Hero5Denatlspa />
      <SliderHome/>
      <Patienttestimonials />

      <BookingForm />

      <Footer />

    </div>

  )
}
