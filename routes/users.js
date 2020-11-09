const router = require('express').Router();
let User = require('../models/user.model');
const nodemailer = require('nodemailer');

require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

app.use(bodyParser.json());

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const phone = req.body.phone1+"-"+req.body.phone2+"-"+req.body.phone3;
  const address = req.body.address;
  const dob = req.body.dob;
  const gender = req.body.gender;
  const size = req.body.size;
  const priority = req.body.priority;

  const newUser = new User({
    username,
    phone,
    address,
    dob,
    gender,
    size,
    priority,
  });

  const output = `
    <p>보평역 서희스타힐스에 등록된 관심고객 정보입니다.</p>
    <h3>고객정보</h3>
    <ul>
      <li>이름: ${req.body.username}</li>
      <li>휴대폰: ${req.body.phone1+"-"+req.body.phone2+"-"+req.body.phone3}</li>
      <li>거주지: ${req.body.address}</li>
      <li>생년월일: ${req.body.dob}</li>
      <li>성별: ${req.body.gender}</li>
      <li>관심평형: ${req.body.size}</li>
      <li>우선순위: ${req.body.priority}</li>
    </ul>
  `;

  const myOAuth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  )
  myOAuth2Client.setCredentials({
    refresh_token:process.env.REFRESH_TOKEN
  });
  const myAccessToken = myOAuth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: process.env.EMAIL, 
         clientId: process.env.CLIENT_ID,
         clientSecret: process.env.CLIENT_SECRET,
         refreshToken: process.env.REFRESH_TOKEN,
         accessToken: myAccessToken 
  }});

  // send mail with defined transport object
  transporter.sendMail({
    from: username, // sender address
    to: process.env.EMAIL, // receiver
    subject: "보평역 서희스타힐스 관심고객 등록알림", // Subject line
    html: output, // html body
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;