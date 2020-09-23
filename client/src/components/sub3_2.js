import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Sonnet from './sonnet.js';
import sub3_3_1 from '../assets/images/sub3_3_1.png';
import sub3_3_2 from '../assets/images/sub3_3_2.png';
import sub3_3_3 from '../assets/images/sub3_3_3.png';
import sub3_3_4 from '../assets/images/sub3_3_4.png';
import sub3_3_5 from '../assets/images/sub3_3_5.png';
import sub3_3_6 from '../assets/images/sub3_3_6.png';
import sub3_3_7 from '../assets/images/sub3_3_7.png';
import sub3_3_8 from '../assets/images/sub3_3_8.png';
import sub3_3_9 from '../assets/images/sub3_3_9.png';
import sub3_3_1_mobile from '../assets/images/sub3_3_1_mobile.png';
import sub3_3_2_mobile from '../assets/images/sub3_3_2_mobile.png';
import sub3_3_3_mobile from '../assets/images/sub3_3_3_mobile.png';
import sub3_3_4_mobile from '../assets/images/sub3_3_4_mobile.png';
import sub3_3_5_mobile from '../assets/images/sub3_3_5_mobile.png';
import sub3_3_6_mobile from '../assets/images/sub3_3_6_mobile.png';
import sub3_3_7_mobile from '../assets/images/sub3_3_7_mobile.png';
import sub3_3_8_mobile from '../assets/images/sub3_3_8_mobile.png';
import sub3_3_9_mobile from '../assets/images/sub3_3_9_mobile.png';

export default function Sub3_2() {
  return (
    <div>
      <div className="title">평면정보</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
        <Tabs defaultActiveKey="52㎡" transition={false} id="noanim-tab-example">
          <Tab eventKey="52㎡" title="52㎡"> 
            <Sonnet src={window.innerWidth < 479 ? sub3_3_1_mobile : sub3_3_1} />
          </Tab>
          <Tab eventKey="53㎡" title="53㎡">
            <Sonnet src={window.innerWidth < 479 ? sub3_3_2_mobile : sub3_3_2} />
          </Tab>
          <Tab eventKey="59㎡A" title="59㎡A">
            <Sonnet src={window.innerWidth < 479 ? sub3_3_3_mobile : sub3_3_3} />
          </Tab>
          <Tab eventKey="59㎡B" title="59㎡B">
            <Sonnet src={window.innerWidth < 479 ? sub3_3_4_mobile : sub3_3_4} />
          </Tab>
          <Tab eventKey="62㎡" title="62㎡">
            <Sonnet src={window.innerWidth < 479 ? sub3_3_5_mobile : sub3_3_5} />
          </Tab>
          <Tab eventKey="71㎡A" title="71㎡A">
            <Sonnet src={window.innerWidth < 479 ? sub3_3_6_mobile : sub3_3_6} />
          </Tab>
          <Tab eventKey="71㎡B" title="71㎡B">
            <Sonnet src={window.innerWidth < 479 ? sub3_3_7_mobile : sub3_3_7} />
          </Tab>
          <Tab eventKey="84㎡" title="84㎡">
            <Sonnet src={window.innerWidth < 479 ? sub3_3_8_mobile : sub3_3_8} />
          </Tab>
          <Tab eventKey="105㎡" title="105㎡">
            <Sonnet src={window.innerWidth < 479 ? sub3_3_9_mobile : sub3_3_9} />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}