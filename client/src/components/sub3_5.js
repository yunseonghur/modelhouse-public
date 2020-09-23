import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Sonnet from './sonnet.js';
import sub3_6_1 from '../assets/images/sub3_6_1.png';
import sub3_6_2 from '../assets/images/sub3_6_2.png';
import sub3_6_3 from '../assets/images/sub3_6_3.png';
import sub3_6_4 from '../assets/images/sub3_6_4.png';
import sub3_6_1_mobile from '../assets/images/sub3_6_1_mobile.png';
import sub3_6_2_mobile from '../assets/images/sub3_6_2_mobile.png';
import sub3_6_3_mobile from '../assets/images/sub3_6_3_mobile.png';
import sub3_6_4_mobile from '../assets/images/sub3_6_4_mobile.png';


export default function Sub3_5() {
  return (
    <div>
      <div className="title">인테리어</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
        <Tabs defaultActiveKey="53㎡" transition={false} id="noanim-tab-example">
          <Tab eventKey="53㎡" title="53㎡">
            <Sonnet src={window.innerWidth < 479 ? sub3_6_1_mobile : sub3_6_1} />
          </Tab>
          <Tab eventKey="59㎡A" title="59㎡A">
            <Sonnet src={window.innerWidth < 479 ? sub3_6_2_mobile : sub3_6_2} />
          </Tab>
          <Tab eventKey="59㎡B" title="59㎡B">
            <Sonnet src={window.innerWidth < 479 ? sub3_6_3_mobile : sub3_6_3} />
          </Tab>
          <Tab eventKey="71㎡B" title="71㎡B">
            <Sonnet src={window.innerWidth < 479 ? sub3_6_4_mobile : sub3_6_4} />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}