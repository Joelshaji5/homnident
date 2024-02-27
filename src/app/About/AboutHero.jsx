import React from 'react'
import "../Style/AboutHero.css"

function AboutHero() {
  return (
    <div className='heroAboutDiv'>

    <h1 className='pt-[150px] text-center text-4xl AboutTxt'>About Us</h1>

    <h1 className='pt-[111px] text-center text-4xl AboutSubTxt'>The dream team</h1>
    
    <div className='flex mt-[25px] justify-around drDivBox'>
        <div className='w-[300px] aboutDrDiv'>
            <img src="dr1.png" alt="img" />
            <h1 className='DrName'>Dr. Shoaib Kazi</h1>
            <h2 className='designation'>Founder</h2>
            <p className='drPara'>Homnident is his brainchild. Dr. Shoaib is a dentist & a businessman from Pune, who makes it all happen.</p>
        </div>
        <div className='w-[300px] aboutDrDiv'>
            <img src="/dr2.png" alt="img" />
            <h1 className='DrName'>Mr. Shantanu Kumbhar</h1>
            <h2 className='designation'>Co-founder, Engineer</h2>
            <p className='drPara'>Shantanu, is a mechanical engineer from Pune. He is our tool guy who builds everything under the sun.</p>
        </div>
        <div className='w-[300px] aboutDrDiv'>
            <img src="/dr3.png" alt="img" />
            <h1 className='DrName'>Dr. Mahak Singh</h1>
            <h2 className='designation'>Dental Director</h2>
            <p className='drPara'>Dr. Mahak is the person who you will see the most, a dentist from Pune who is known for her gentle, warm & caring demeanor.</p>
        </div>
    </div>

    </div>
  )
}

export default AboutHero