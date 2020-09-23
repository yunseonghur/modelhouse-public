import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SonnetVideo from './sonnet_video.js';


export default function Sub3_3() {
  return (
    <div>
      <div className="title">유니트 스케치</div>
      <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
        <Tabs defaultActiveKey="53㎡" transition={false} id="noanim-tab-example">
          <Tab eventKey="53㎡" title="53㎡">
            <SonnetVideo src="https://www.youtube.com/embed/Dyx6tMZqeVA" />
          </Tab>
          <Tab eventKey="59㎡A" title="59㎡A">
            <SonnetVideo src="https://www.youtube.com/embed/GAJpxkB4XaI" />
          </Tab>
          <Tab eventKey="59㎡B" title="59㎡B">
            <SonnetVideo src="https://www.youtube.com/embed/DldtuGuoUOc" />
          </Tab>
          <Tab eventKey="71㎡B" title="71㎡B">
            <SonnetVideo src="https://www.youtube.com/embed/olyL7qE1dDw" />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}