const router = require('express').Router();
let User = require('../models/user.model');
const nodemailer = require('nodemailer');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const phone = req.body.phone1+"-"+req.body.phone2+"-"+req.body.phone3;
  const address = req.body.address;
  // const dob = Date.parse(req.body.dob);
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
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.ADMIN_EMAIL, // generated ethereal user
      pass: process.env.ADMIN_PWD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: username, // sender address
    to: process.env.ADMIN_EMAIL, // list of receivers
    subject: "보평역 서희스타힐스 관심고객 등록알림", // Subject line
    html: output, // html body
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;