import React, { Component } from 'react';
import '../css/home.css';
import bg from '../assets/images/home_bg.png'
import home_top_modal from '../assets/images/home_top_modal.png'
import home_middle from '../assets/images/home_middle.png'
import home_bottom1 from '../assets/images/home_bottom1.png'
import home_bottom2 from '../assets/images/home_bottom2.png'
import view_cybermodelhouse from '../assets/images/view_cybermodelhouse.png'


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-top">
        <img className="bg_img" src={bg} alt=""></img>
        <a href="/sub3_4" id="home-top-modal">
          <img className="img-fluid" src={view_cybermodelhouse} alt=""></img>
        </a>
        </div>

        <div className="container">
          <img className="img-fluid" src={home_middle} alt="" id="home-top-row">
          </img>
          <div className="row" id="home-middle-row">
            <div className="col-sm bottom-item" id="bottom-item1">
              <iframe width="100%" src="https://www.youtube.com/embed/ph4VbakpLLY?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id="home_video" title="home_video"></iframe>
              <img className="img-fluid" src={home_bottom1} alt=""></img>
            </div>
            <div style={{width:"3%"}}/>
            <div className="col-sm bottom-item">
              <a href="/user">
                <img className="img-fluid" src={home_bottom2} alt=""></img>
              </a>
            </div>
          </div>
          <div className="row" id="home-bottom-modal">
          <div className="home-bottom-modal-item1">
            <img className="img-fluid" src={home_top_modal} alt=""></img>
          </div>
          <div className="home-bottom-modal-item2">
            <a href="/sub3_4">
              <img className="img-fluid" src={view_cybermodelhouse} alt=""></img>
            </a>
          </div>
          </div>
          <div className="row" id="home-bottom-row">
            <div className="col">
              <p>용인의 편리한 입지프리미엄을 누리는<br/>용인 보평역 스타힐스!!</p>
            </div>
            <div className="col">
              <p>스피드 라이프가 시작되는 아파트<br/>용인 보평역 스타힐스!!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}