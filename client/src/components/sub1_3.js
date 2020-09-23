import React from 'react';
import sub1_3 from '../assets/images/sub1_3.png';
import sub1_3_mobile from '../assets/images/sub1_3_mobile.png';


export default function Sub1_3() {
  return (
    <div>
      <div className="title">입지여건</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
      {window.innerWidth < 479 ?
        <img src={sub1_3_mobile} className="img-fluid" alt="sub1_3_mobile" />
        :
        <img src={sub1_3} className="img-fluid" alt="sub1_3" />
      }
      </div>
    </div>
  )
}