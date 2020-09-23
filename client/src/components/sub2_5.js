import React from 'react';
import sub2_5 from '../assets/images/sub2_5.png';
import sub2_5_mobile from '../assets/images/sub2_5_mobile.png';


export default function Sub2_5() {
  return (
    <div>
      <div className="title">시스템</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
      {window.innerWidth < 479 ?
        <img src={sub2_5_mobile} className="img-fluid" alt="sub2_5_mobile" />
        :
        <img src={sub2_5} className="img-fluid" alt="sub2_5"/>
      }     
      </div>
    </div>
  )
}