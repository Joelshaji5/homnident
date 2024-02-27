import React from 'react'
import "../../Style/Footer.css"

function Footer() {
  return (
    <div className='footerDiv'>


    <div className='footerImgDiv'>
    <img src='./footerLogo.png' alt='logo' className='FooterLogo' />

    </div>
    <div className='footerTxtDiv'>
        <div></div>
        <div>
        <h3>Location - Pune, Navi Mumbai</h3>
        <h3>Email ID - homnident@gmail.com</h3>
        <h3>Phone number - 95037 75068</h3>
        </div>
        <div>
          <p className='Designed'>Designed by - TechRift Dynamics</p>
        </div>
    </div>

    </div>
  )
}

export default Footer