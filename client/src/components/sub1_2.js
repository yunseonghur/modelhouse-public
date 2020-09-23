import React from 'react';
import sub1_2 from '../assets/images/sub1_2.png';
import sub1_2_mobile from '../assets/images/sub1_2_mobile.png';


export default function Sub1_2() {
  return (
    <div>
      <div className="title">브랜드 소개</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
      {window.innerWidth < 479 ?
        <img src={sub1_2_mobile} className="img-fluid" alt="sub1_2_mobile" />
        :
        <img src={sub1_2} className="img-fluid" alt="sub1_2" />
      }
      </div>
    </div>
  )
}