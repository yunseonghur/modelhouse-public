import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SonnetVideo from './sonnet_video.js';


export default function Sub3_4() {
  return (
    <div>
      <div className="title">사이버 모델하우스</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
        <Tabs defaultActiveKey="53㎡" transition={false} id="noanim-tab-example">
          <Tab eventKey="53㎡" title="53㎡">
            <SonnetVideo src="https://my.matterport.com/show/?m=XQmSi6gc9en&hl=1&ts=1&play=1&wts=1" />
          </Tab>
          <Tab eventKey="59㎡A" title="59㎡A">
            <SonnetVideo src="https://my.matterport.com/show/?m=fZoiL1u8CwZ&hl=1&ts=1&play=1&wts=1" />
          </Tab>
          <Tab eventKey="59㎡B" title="59㎡B">
            <SonnetVideo src="https://my.matterport.com/show/?m=EKiiSKfXeW3&hl=1&ts=1&play=1&wts=1" />
          </Tab>
          <Tab eventKey="71㎡B" title="71㎡B">
            <SonnetVideo src="https://my.matterport.com/show/?m=BUJkaJA24uu&hl=1&ts=1&play=1&wts=1" />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}