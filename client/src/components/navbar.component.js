import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../css/navbar.css';
import logo from '../assets/images/logo.png';
import { logDOM } from '@testing-library/react';

export default function Navbar0() {

  const [shouldOpen1, show1] = useState(false);
  const [shouldOpen2, show2] = useState(false);
  const [shouldOpen3, show3] = useState(false);
  const [shouldOpen4, show4] = useState(false);
  // const [shouldOpen5, show5] = useState(false);

  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="white">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="사업안내" id="collasible-nav-dropdown" onMouseEnter={()=>show1(true)} onMouseLeave={()=>show1(false)} show={shouldOpen1}>
            <NavDropdown.Item href="/sub1_1" className="dropdown-top">사업개요</NavDropdown.Item>
            <NavDropdown.Item href="/sub1_2">브랜드 소개</NavDropdown.Item>
            <NavDropdown.Item href="/sub1_3">입지여건</NavDropdown.Item>
            <NavDropdown.Item href="/sub1_4">오시는길</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="단지안내" id="collasible-nav-dropdown" onMouseEnter={()=>show2(true)} onMouseLeave={()=>show2(false)} show={shouldOpen2}>
            <NavDropdown.Item href="/sub2_2" className="dropdown-top">단지동호수</NavDropdown.Item>
            <NavDropdown.Item href="/sub2_3">특장점</NavDropdown.Item>
            <NavDropdown.Item href="/sub2_4">커뮤니티</NavDropdown.Item>
            <NavDropdown.Item href="/sub2_5">시스템</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="세대안내" id="collasible-nav-dropdown" onMouseEnter={()=>show3(true)} onMouseLeave={()=>show3(false)} show={shouldOpen3}>
            <NavDropdown.Item href="/sub3_1" className="dropdown-top">입지스케치</NavDropdown.Item>
            <NavDropdown.Item href="/sub3_2">평면정보</NavDropdown.Item>
            <NavDropdown.Item href="/sub3_3">유니트 스케치</NavDropdown.Item>
            <NavDropdown.Item href="/sub3_4">사이버 모델하우스</NavDropdown.Item>
            <NavDropdown.Item href="/sub3_5">인테리어</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="분양안내" id="collasible-nav-dropdown" onMouseEnter={()=>show4(true)} onMouseLeave={()=>show4(false)} show={shouldOpen4}>
            <NavDropdown.Item href="/sub4_1" className="dropdown-top">입주자 공고모집</NavDropdown.Item>
            <NavDropdown.Item href="/sub4_2">당첨자 서류제출</NavDropdown.Item>
          </NavDropdown>
          {/* <NavDropdown title="관심고객등록" id="collasible-nav-dropdown" onMouseEnter={()=>show5(true)} onMouseLeave={()=>show5(false)} show={shouldOpen5}>
            <NavDropdown.Item href="/user" className="dropdown-top">관심고객등록</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="/user" className="navlink-bottom">관심고객등록</Nav.Link>
          <div className="navbar-text">
            <b>
              <span className="navbar-text-inner" style={{fontSize:"16pt"}}>
                <i className="fas fa-phone-alt"/> 
              </span>
              <a href="tel:1666-8449" style={{fontSize:"20pt", color:"#296066", textDecoration:"none"}}>1666-8449</a>
            </b>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}