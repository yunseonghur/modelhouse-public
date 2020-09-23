import React, { Component } from 'react';
import sub4_2_1 from '../assets/images/sub4_2_1.png';
import sub4_2_2 from '../assets/images/sub4_2_2.png';
import sub4_2_3 from '../assets/images/sub4_2_3.png';
import sub4_2_1_mobile from '../assets/images/sub4_2_1_mobile.png';


export default class Sub4_1 extends Component {
  prepMsg () {
    alert("준비중입니다");
  }
  render(){
    return (
      <div>
        <div className="title">입주자 모집공고</div>
        <div className="container" style={{marginTop:"10%", marginBottom:"10%"}}>
          <img src={window.innerWidth < 479 ? sub4_2_1_mobile : sub4_2_1} className="img-fluid" alt="sub4_2_1" style={{marginBottom:"5%"}}/>
  
          <div className="row">
              <div className="col-sm">
                <a href="#!" onClick={this.prepMsg} >
                  <img src={sub4_2_2} className="img-fluid" alt="sub4_2_2" style={window.innerWidth < 576 ? {paddingBottom:"10px"} : {} }/>
                </a>
              </div>
              <div className="col-sm">
                <a href="#!" onClick={this.prepMsg} >
                  <img src={sub4_2_3} className="img-fluid" alt="sub4_2_3" />
                </a>
              </div>
            </div>
  
        </div>
      </div>
    )  
  }
}