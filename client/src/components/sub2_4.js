import React from 'react';
import sub2_4 from '../assets/images/sub2_4.png';
import sub2_4_mobile from '../assets/images/sub2_4_mobile.png';


export default function Sub2_4() {
  return (
    <div>
      <div className="title">커뮤니티</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
      {window.innerWidth < 479 ?
        <img src={sub2_4_mobile} className="img-fluid" alt="sub2_4_mobile" />
        :
        <img src={sub2_4} className="img-fluid" alt="sub2_4"/>
      }     
      </div>
    </div>
  )
}