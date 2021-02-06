const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

exports.sendForm = (req, res, next) => {
  transporter
    .sendMail({
      to: process.env.SENDGRID_EMAIL,
      from: process.env.SENDGRID_EMAIL,
      subject: `Message from ${req.body.name}`,
      html: `<div>[From]<br />${req.body.name} (${req.body.email})<br /><br />[Message]<br />${req.body.message}</div>`,
    })
    .then(() => {
      res.status(200).send("OK");
    })
    .catch((error) => {
      next(error);
    });
};
