import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../css/create-user.css';
import { Table, Form } from 'react-bootstrap';
// import DaumPostcode from 'react-daum-postcode';


export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePhone1 = this.onChangePhone1.bind(this);
    this.onChangePhone2 = this.onChangePhone2.bind(this);
    this.onChangePhone3 = this.onChangePhone3.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 

    this.state = {
      username: '',
      phone1: '010',
      phone2: '',
      phone3: '',
      address: '',
      // dob: 'null',
      dob: '',
      gender: '',
      size: '',
      priority: '',
      searchClicked: false
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePhone1(e) {
    this.setState({
      phone1: e.target.value
    });
  }

  onChangePhone2(e) {
    this.setState({
      phone2: e.target.value
    });
  }

  onChangePhone3(e) {
    this.setState({
      phone3: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  // onChangeAddress(fullAddress) {
  //   this.setState({
  //     address: fullAddress
  //   });
  // }

  onChangeDob(e) {
    this.setState({
      dob: e.target.value
    });
  }

  // onChangeDob(date) {
  //   this.setState({
  //     dob: date
  //   });
  // }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeSize(e) {
    this.setState({
      size: e.target.value
    });
  }

  onChangePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    
    const user = {
      username: this.state.username,
      phone1: this.state.phone1,
      phone2: this.state.phone2,
      phone3: this.state.phone3,
      address: this.state.address,
      dob: this.state.dob,
      gender: this.state.gender,
      size: this.state.size,
      priority: this.state.priority
    }

    // console.log(user);

    await axios.post('/users/add', user)
      .then(alert("고객등록 완료"));
      // .then(res => console.log(res.data));
    
    this.setState({
      username: '',
      phone1: '010',
      phone2: '',
      phone3: '',
      address: '',
      // dob: null,
      dob: '',
      gender: '',
      size: '',
      priority: ''
    });
  }

  // handleComplete = (data) => {
  //   let fullAddress = data.address;
  //   let extraAddress = ''; 
    
  //   if (data.addressType === 'R') {
  //     if (data.bname !== '') {
  //       extraAddress += data.bname;
  //     }
  //     if (data.buildingName !== '') {
  //       extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
  //     }
  //     fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
  //   }
  //   console.log(fullAddress);  // e.g. '경기 의왕시 백운호수로1길 9 (학의동, 백운밸리 풍경채 레이크포레 4단지 아파트)'

  //   document.getElementById("sample3_extraAddress").value = "("+extraAddress+")";
  //   // document.getElementById('sample3_postcode').value = data.zonecode;
  //   document.getElementById("sample3_address").value = data.address;

  //   this.onChangeAddress(fullAddress);
  // } 

  // showDaum = () => {
  //   this.setState({
  //     searchClicked: !this.state.searchClicked
  //   });
  // }

  render() {
    return (
      <div>
        <div className="title">관심고객등록</div>
        <div className="container" style={{marginTop:"30px", marginBottom:"10%"}}>
          <h3>관심 고객 등록</h3><br/>
          <form method="POST" action="/users/add" onSubmit={this.onSubmit}>
            <h5>개인정보 입력</h5>
            <Table bordered>
              <tbody className="user-table">
                <tr>
                  <td>이름 <span className="required">*</span></td>
                  <td>
                    <input  
                      type="text"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      style={{width:"175px"}}
                      placeholder="이름(청약예정자)" 
                    />
                    <span id="hint">(청약통장 사용예정자 이름을 입력하세요)</span>
                  </td>
                </tr>
                <tr>
                  <td>휴대전화 <span className="required">*</span></td>
                  <td>
                    <Form.Control
                    type="text" 
                    as="select" 
                    name="phone1"
                    value={this.state.phone1}
                    onChange={this.onChangePhone1}
                    style={{width:"80px", display:"inline"}}>
                      <option>010</option>
                      <option>011</option>
                      <option>016</option>
                      <option>017</option>
                      <option>018</option>
                      <option>018</option>
                      <option>019</option>
                    </Form.Control>
                    <span> - </span>
                    <input  
                      type="text"
                      name="phone2"
                      required
                      className="form-control"
                      value={this.state.phone2}
                      onChange={this.onChangePhone2}
                      maxLength="4"
                      style={{width:"80px", display:"inline"}}
                    />
                    <span> - </span>
                    <input  
                      type="text"
                      name="phone3"
                      required
                      className="form-control"
                      value={this.state.phone3}
                      onChange={this.onChangePhone3}
                      maxLength="4"
                      style={{width:"80px", display:"inline"}}
                    />
                  </td>
                </tr>
                <tr>
                  <td>거주지 <span className="required">*</span></td>
                  <td>
                    <input 
                      type="text" 
                      className="form-control" 
                      required 
                      value={this.state.address}
                      onChange={this.onChangeAddress}
                      placeholder="시/군/구까지만 입력하세요" 
                      style={{width:"275px"}}
                    />
                    {/* <input type="text" id="sample3_postcode" className="form-control" placeholder="우편번호" style={{width:"80px", display:"inline", padding:"12px", margin:"0 6px 6px 0"}} />
                    <button type="button" className="btn btn-secondary" onClick={this.showDaum} style={{verticalAlign:"baseline"}}>우편번호 찾기</button>
                    <button type="button" className="btn btn-secondary" onClick={this.showDaum} style={{verticalAlign:"baseline"}} style={{margin:"0 6px 6px 0"}}>주소 찾기</button>
                    {
                      this.state.searchClicked ? 
                        <DaumPostcode
                        onComplete={this.handleComplete}
                        autoClose="true"
                        /> 
                        : 
                        <></>
                    }
                    <input type="text" id="sample3_address" className="form-control" required placeholder="기본주소 (동까지만 입력)" style={{width:"300px", marginBottom:"6px"}} />
                    <input type="text" id="sample3_extraAddress" className="form-control" placeholder="참고사항" style={{width:"300px"}} />

                    <div id="wrap" style={{display:"none", border:"1px solid", width:"500px", height:"300px", margin:"5px 0", position:"relative"}}>
                    </div> */}
                  </td>
                </tr>
                <tr>
                  <td>생년월일 <span className="required">*</span></td>
                  <td>
                    <input  
                        type="text"
                        required
                        className="form-control"
                        value={this.state.dob}
                        onChange={this.onChangeDob}
                        placeholder="년/월/일 순서대로 입력하세요" 
                        style={{width:"275px"}}
                      />
                    {/* <div>
                      <DatePicker
                        selected={this.state.dob}
                        onChange={this.onChangeDob}
                        required
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        placeholderText="MM/DD/YYYY"
                      />
                    </div> */}
                  </td>
                </tr>
                <tr>
                  <td>성별 <span className="required">*</span></td>
                  <td>
                    <div onChange={this.onChangeGender}>
                      <span className="radio-text"><input className="input-radio" type="radio" value="남" name="gender" required />남</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="여" name="gender" />여</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>관심평형 <span className="required">*</span></td>
                  <td>
                    <div onChange={this.onChangeSize}>
                      <span className="radio-text"><input className="input-radio" type="radio" value="52㎡" name="size" required />52㎡</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="53㎡" name="size" />53㎡</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="59㎡A" name="size" />59㎡A</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="59㎡B" name="size" />59㎡B</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="62㎡" name="size" />62㎡</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="71㎡A" name="size" />71㎡A</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="71㎡B" name="size" />71㎡B</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="84㎡" name="size" />84㎡</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="105㎡" name="size" />105㎡</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>청약통장순위</td>
                  <td>
                    <div onChange={this.onChangePriority}>
                      <span className="radio-text"><input className="input-radio" type="radio" value="1순위" name="priority" />1순위</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="2순위" name="priority" />2순위</span>
                      <span className="radio-text"><input className="input-radio" type="radio" value="무순위" name="priority" />무순위</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="form-check">
              <p id="consent">
                개인정보 수집 및 이용목적 <br/>
                1. 수집하는 개인정보 항목 <br/>
                  - 수집항목 : 이름, 휴대폰번호, 주소, 생년월일, 성별 등 <br/>
                  - 수지방법 : 홈페이지 관심고객 등록 <br/>
                2. 개인 정보의 수집 및 이용목적 <br/>
                  - 분양정보 및 분양상담 등 문의처리 <br/>
                3, 개인 정보의 보유 및 이용기한 <br/>
                  - 개인정보 및 이용목적이 달성된 이후에는 예외없이 해당정보를 지체없이 파기합니다 <br/>
              </p>
              <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
              <label className="form-check-label" htmlFor="exampleCheck1" style={{marginBottom:"5%"}}>개인정보 수집 및 이용목적에 동의합니다 <span className="required">*</span></label>
            </div>

            <div className="form-group text-center">
              <input type="submit" value="관심고객 등록" className="btn btn-lg" style={{backgroundColor:"#51B3E3", color:"white", padding:"10px 70px", fontWeight:"500"}}/>
            </div>
          </form>
        </div>
      </div>

    )
  }
}