import React from 'react'
import "../Style/Hero2.css"

function Hero2() {
  return (
    <div>
    <div className='flex justify-center about2Div'>

    <div>
        <img src="./hero2Bg.png" alt=""  className='About2Img'/>
        </div>
    <div className='Hero2ParaDiv'>
        <h2 className='Hero2Heading'>Who are we</h2>
        <p  className='Hero2Para'>We’re a team of dentists who provide dental care under expert dentists, at your home, keeping in mind of our patient’s needs, convenience and safety. We believe in long term and personalized dental care instead of short-term solutions. So, we provide distinguished, ethical and informed dental care. We also use the best and most advanced dental technology. We aim to deliver high 
        quality and effective dental treatments at affordable rates to all our patients. We provide extensive dental services.</p>
    </div>


    </div>

    <div className='MbWhyChooseUs'>

      <h1 className='Hero2HeadingMb'>why choose us?</h1>
      <p className='Hero2ParaMb'>If you are one of those individuals who are particular about your dental hygiene, you must choose the best when in concerns about oral checkups and treatments.</p>
    
      <div>
        <div className='flex hero2DivMbIcon1 justify-evenly'>
          <div>
          <img src="./whyMb1.png" alt=""  className='About2ImgMb'/>
             <h1 className='whyChooseMbH'>Experienced Dentists</h1>
             <p className='whyChooseMbP'>Be rest assured that your treatment will administered by highly skilled experts in the field.</p>
          </div>
          <div>
          <img src="./whyMb2.png" alt=""  className='About2ImgMb'/>
  <h1 className='whyChooseMbH'>Patient Centric</h1>
  <p className='whyChooseMbP'>We provide dental care according to the patient’s time & convenience.</p>
          </div>

        </div>
        <div className='flex justify-evenly'>

        <div>
          <img src="./whyMb3.png" alt=""  className='About2ImgMb'/>
<h1 className='whyChooseMbH'>Affordable</h1>
<p className='whyChooseMbP'>We aim to provide the best treatment yet being cost-effective & pocket friendly, suitable for all classes.</p>
          </div>
          <div>
          <img src="./whyMb14.png" alt=""  className='About2ImgMb'/>
<h1 className='whyChooseMbH'>Covid Safety</h1>
<p className='whyChooseMbP'>We adhere to sterilisation & disinfection protocols, ensuring the same level of cleanliness & safety as in a clinic setting.</p>
          </div>



        </div>
      </div>

    </div>
    </div>
  )
}

export default Hero2