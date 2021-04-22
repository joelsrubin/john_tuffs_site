require('dotenv').config();
const PASSWORD = process.env.password;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'boaRmong@gmail.com',
    pass: PASSWORD,
  },
  secure: true,
});

export default (req, res) => {

  const mailData = {
    from: req.body.email,
    to: 'joelsrubin@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div>
    <p>Sent from:
      ${req.body.email}</p>`
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });


  console.log("body: ", req.body);
  res.status(200);
};

