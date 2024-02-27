import React from 'react'
import "../Style/Hero3.css"

function Hero3() {
  return (
    <div className='flex Hero3 flex-col Hero3MainDiv'>
    
    <div>
        <h1 className='h3Heading'>why choose us?</h1>
        <p className='h3Para' >If you are one of those individuals who are particular about your dental hygiene, you must 
            choose the best when in concerns about oral checkups and treatments.</p>
    </div>

    <div className='flex justify-center justify-around mt-14'>
        <div className='imgh3div'>
            <img src="./ExperiencedDentists.png" alt="Experienced Dentists" />
            <h3 className='h3SubHeading'>Experienced Dentists</h3>
            <p className='h3SubPara'>Be rest assured that your treatment will administered by highly skilled experts in the field.</p>
        </div>
        <div className='imgh3div'>
            <img src="./PatientCentric.png" alt="PatientCentric" />
            <h3 className='h3SubHeading'>Patient Centric</h3>
            <p className='h3SubPara'>We provide dental care according to the patient’s time & convenience.</p>
        </div>
        <div className='imgh3div'>
            <img src="./Affordable.png" alt="Affordable" />
            <h3 className='h3SubHeading'>Affordable</h3>
            <p className='h3SubPara'>We aim to provide the best treatment yet being cost-effective & pocket friendly, suitable for all classes.</p>
        </div>
        <div className='imgh3div'>
            <img src="./CovidSafety.png" alt="Covid Safety" />
            <h3 className='h3SubHeading'>Covid Safety</h3>
            <p className='h3SubPara'>We adhere to sterilisation & disinfection protocols, ensuring the same level of cleanliness & safety as in a clinic setting.</p>
        </div>
    </div>

    </div>
  )
}

export default Hero3