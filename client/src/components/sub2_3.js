import React from 'react';
import sub2_3 from '../assets/images/sub2_3.png';
import sub2_3_mobile from '../assets/images/sub2_3_mobile.png';


export default function Sub2_3() {
  return (
    <div>
      <div className="title">특장점</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
      {window.innerWidth < 479 ?
        <img src={sub2_3_mobile} className="img-fluid" alt="sub2_3_mobile" />
        :
        <img src={sub2_3} className="img-fluid" alt="sub2_3" />
      }      
      </div>
    </div>
  )
}