import React from 'react';
import sub2_1_1 from '../assets/images/sub2_1_1.png';
import sub3_4_mobile from '../assets/images/sub3_4_mobile.png';


export default function SonnetVideo(props) {
  return (
    <div className="container" style={{marginTop:"5%"}}>
      <div style={{position:"relative", height:"0", paddingBottom:"56.25%", marginBottom:"2%", }}>
      <iframe width="100%" height="100%" src={props.src} title={props.src} frameBorder="0" allow="encrypted-media" allowFullScreen style={{top:"0", left:"0", position:"absolute"}}></iframe>
      </div>
      {window.innerWidth < 479 ? 
        <img src={sub3_4_mobile} className="img-fluid" alt="sub3_4_mobile" style={{paddingTop:"2%"}} />
        :
        <img src={sub2_1_1} className="img-fluid" alt="sub2_1_1"/>
      }
    </div>
  )
}