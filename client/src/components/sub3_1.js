import React from 'react';
import sub3_1 from '../assets/images/sub3_1.png';
import sub3_1_1_mobile from '../assets/images/sub3_1_1_mobile.png';


export default function Sub3_1() {
  return (
    <div>
      <div className="title">입지스케치</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
      {window.innerWidth < 479 ?
        <img src={sub3_1_1_mobile} className="img-fluid" alt="sub3_1_1_mobile" />
        :
        <img src={sub3_1} className="img-fluid" alt="sub3_1"/>
      } 
      </div>
    </div>
  )
}