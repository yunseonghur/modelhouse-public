import React from 'react';
import '../css/footer.css';
import foot_logo from '../assets/images/foot_logo.png';


const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
      <div className="col">
        <span className="helper"></span>
        <img src={foot_logo} id="footer-img" className="img-fluid" alt="foot_logo" />
      </div>
      <div className="col text-right">
        <p>용인 보평역 서희스타힐스 모델하우스</p>
        <p>현장 주소 : 경기도 용인시 유방동 330-1 일원</p>
        <p><span id="manager">강희숙</span> 대표번호 : 1666-8449</p>
        <p>COPYRIGHT 용인서희스타힐스 ALL RIGHTS RESERVED</p>
      </div>
      </div>
    </div>
  )
}

export default Footer;