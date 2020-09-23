import React from 'react';
import sub1_1 from '../assets/images/sub1_1.png';
import sub1_1_mobile from '../assets/images/sub1_1_mobile.png';


export default function Sub1_1() {
  return (
    <div>
      <div className="title">사업개요</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
      {window.innerWidth < 479 ?
        <img src={sub1_1_mobile} className="img-fluid" alt="sub1_1_mobile" />
        :
        <img src={sub1_1} className="img-fluid" alt="sub1_1" />
      }
      </div>
    </div>
  )
}