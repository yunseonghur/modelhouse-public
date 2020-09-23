import React from 'react';
import sub2_2 from '../assets/images/sub2_2.png';
import sub2_2_mobile from '../assets/images/sub2_2_mobile.png';


export default function Sub2_2() {
  return (
    <div>
      <div className="title">단지동호수</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
      {window.innerWidth < 479 ?
        <img src={sub2_2_mobile} className="img-fluid" alt="sub2_2_mobile" />
        :
        <img src={sub2_2} className="img-fluid" alt="sub2_2" />
      }      
      </div>
    </div>
  )
}