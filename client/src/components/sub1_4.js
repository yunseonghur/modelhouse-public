import React from 'react';
import sub1_4_1 from '../assets/images/sub1_4_1.png';
import sub1_4_3 from '../assets/images/sub1_4_3.png';
import sub1_4_4 from '../assets/images/sub1_4_4.png';
import sub1_4_5 from '../assets/images/sub1_4_5.png';


export default function Sub1_3() {
  return (
    <div>
      <div className="title">오시는길</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
        <img src={sub1_4_1} className="img-fluid" alt="sub1_4_1" style={{marginBottom:"2%"}}/>
        <div style={{flex:"0 0 100%", maxWidth:"100%", textAlign:"right"}}>
          <img src={sub1_4_3} className="img-fluid" alt="sub1_4_3" style={window.innerWidth < 479 ? {padding:"10px 10px 10px 0"} : {paddingRight:"10px"} }/>
          <img src={sub1_4_4} className="img-fluid" alt="sub1_4_4" style={{paddingRight:"10px"}}/>
          <img src={sub1_4_5} className="img-fluid" alt="sub1_4_5" />
        </div>
      </div>
    </div>
  )
}