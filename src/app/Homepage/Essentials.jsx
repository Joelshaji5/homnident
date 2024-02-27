import React from 'react';
import './Essentials.css'; // Import your CSS file where you define styles for `essentialsImgDiv1` and `essentialsImgDiv2`

export default function Essentials() {
  return (
    <div>
      <h1 className='EssentialH'>the Essentials</h1>
      <div className="mobile-grid">
        <div className='essentialsImgDiv1' >
          <h1>DentaRestore <br />- Filling</h1>
        </div>
        <div className='essentialsImgDiv1' >
          <h1>Root Canal <br />Treatment</h1>
        </div>
        <div className='essentialsImgDiv1' >
          <h1>Dental <br />Implants</h1>
        </div>
        <div className='essentialsImgDiv1' >
    <h1>Tooth <br></br>Extraction</h1>
        </div>
        <div className='essentialsImgDiv1' >
    <h1>Dentures</h1>
        </div>
        <div className='essentialsImgDiv1' >
    <h1>Smile <br></br>designing</h1>
        </div>
      </div>

      <div className="pic-grid ">
      <div className='essentialsImgDiv1' >
          <h1>DentaRestore <br />- Filling</h1>
        </div>
        <div className='essentialsImgDiv1' >
          <h1>Root Canal <br />Treatment</h1>
        </div>
        <div className='essentialsImgDiv1' >
          <h1>Dental <br />Implants</h1>
        </div>
        <div className='essentialsImgDiv1' >
    <h1>Tooth <br></br>Extraction</h1>
        </div>
        <div className='essentialsImgDiv1' >
    <h1>Dentures</h1>
        </div>
        <div className='essentialsImgDiv1' >
    <h1>Smile <br></br>designing</h1>
        </div>
      </div>
    </div>
  );
}
