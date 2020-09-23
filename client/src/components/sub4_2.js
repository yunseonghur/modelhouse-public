import React, { Component } from 'react';
import sub4_4_1 from '../assets/images/sub4_4_1.png';
import sub4_4_2 from '../assets/images/sub4_4_2.png';
import sub4_4_3 from '../assets/images/sub4_4_3.png';
import sub4_4_4 from '../assets/images/sub4_4_4.png';
import sub4_4_5 from '../assets/images/sub4_4_5.png';
import sub4_4_6 from '../assets/images/sub4_4_6.png';
import sub4_4_7 from '../assets/images/sub4_4_7.png';
import sub4_2_1_mobile from '../assets/images/sub4_2_1_mobile.png';


export default class Sub4_2 extends Component {
  prepMsg () {
    alert("준비중입니다");
  }
  render(){
    return (
      <div>
        <div className="title">당첨자 서류제출</div>
        <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
          <img src={window.innerWidth < 479 ? sub4_2_1_mobile : sub4_4_1} className="img-fluid" alt="sub4_4_1" style={{marginBottom:"5%"}}/>
  
          <div className="row">
              <div className="col-sm">
                <a href="#!" onClick={this.prepMsg} >
                  <img src={sub4_4_2} className="img-fluid" alt="sub4_4_2" style={{marginBottom:"5%"}}/>
                </a>
              </div>
              <div className="col-sm">
                <a href="#!" onClick={this.prepMsg} >
                  <img src={sub4_4_3} className="img-fluid" alt="sub4_4_3" style={{marginBottom:"5%"}} />
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <a href="#!" onClick={this.prepMsg} >
                  <img src={sub4_4_4} className="img-fluid" alt="sub4_4_4" style={{marginBottom:"5%"}} />
                </a>
              </div>
              <div className="col-sm">
                <a href="#!" onClick={this.prepMsg} >
                  <img src={sub4_4_5} className="img-fluid" alt="sub4_4_5" style={{marginBottom:"5%"}} />
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <a href="#!" onClick={this.prepMsg} >
                  <img src={sub4_4_6} className="img-fluid" alt="sub4_4_6" style={{marginBottom:"5%"}} />
                </a>
              </div>
              <div className="col-sm">
                <a href="#!" onClick={this.prepMsg} >
                  <img src={sub4_4_7} className="img-fluid" alt="sub4_4_7" style={{marginBottom:"5%"}} />
                </a>
              </div>
            </div>
  
        </div>
      </div>
    )  
  }
}