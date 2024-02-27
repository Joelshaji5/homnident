import React from 'react'
import "../Style/AboutHero2.css"
import Footer from '../Components/Footer/Footer'

function AboutHero2() {
  return (
    <div className='AboutHero2Div mb-4'>
        
    <h1 className='AboutCommunity'>Giving Back to the community!</h1>
    <p className='AboutCommunityP'>Since the establishment of Homnident, Our sole focus and efforts are towards the good we can do for the community and how we can make dental health better while spreading awareness. Check out our journey from a few of such works we did.</p>


    <div className='flex ml-[15%] mr-[15%] gap-[30px] mt-[30px] AboutImgDiv'>
      <img className='community1' src="/community1.png" alt="" />
      <img className='community2' src="/community2.png" alt="" />

    </div>
    <div className='flex ml-[15%] mr-[15%] gap-[30px] mt-[30px] AboutImgDiv'>
      <img className='community3' src="/community3.png" alt="" />
      <img className='community4' src="/community4.png" alt="" />

    </div>
    <div className='flex ml-[15%] mr-[15%] gap-[30px] mt-[30px] AboutImgDiv'>
      <img className='community5' src="/community5.png" alt="" />
      <img className='communit6' src="/community6.png" alt="" />

    </div>


    <div className='flex mt-[70px] justify-center AboutImgDiv'>
      <div className="campsDiv1 ">

    <h1 className='CampDivH' > Corporate Dental Camps</h1>
    <div className='Line'></div>
    <p className='CampDivP' >Homnident provides dental checkups at workplaces, ensuring employees receive quality oral care conveniently. The programs are designed to promote dental wellness, contributing to healthier and more productive teams.</p>


      </div>
      <div className="campsDiv2 ml-[30px] ">

      <h1 className='CampDivH' >School Health Checkups</h1>
      <div className='Line'></div>

      <p className='CampDivP' >Homnident conducts dental checkups for students directly at schools, emphasizing preventive measures and oral hygiene education. These initiatives aim to instill good dental habits and improve overall well-being among young individuals</p>
    </div>

    </div>

    <div className='flex mt-[30px] justify-center AboutImgDiv'>
      <div className="campsDiv3">
        <h1 className='CampDivH' >Society Dental Checkups</h1>
        <div className='Line'></div>

        <p className='CampDivP' >Homnident organizes dental health checkups within residential communities, prioritizing the oral well-being of residents. </p>
      </div>
      <div className="campsDiv4 ml-[30px]">

        <h1 className='CampDivH' >Community Dental Camps</h1>
        <div className='Line'></div>

        <p className='CampDivP' > Homnident hosts dental health events in various locations to provide accessible oral care to communities. With a commitment to community well-being, these camps offer professional dental services in convenient settings for all members.</p>
      </div>
    </div>


<Footer />
</div>
  )
}

export default AboutHero2