import Image from 'next/image'
import Hero from './Homepage/Hero'
import Hero2 from './Homepage/Hero2'
import Hero3 from './Homepage/Hero3'
import Hero5Denatlspa from './Homepage/hero5Denatlspa'
import Form from './Homepage/Form'
import Patienttestimonials from './Homepage/Patienttestimonials'
export default function Home() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero5Denatlspa />
      <Form />
      <Patienttestimonials />

    </div>

  )
}
