const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

export default function(req, res) {
  if (req.method === "POST") {
    // configure smtp transporter
    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'astrydax.webmail@gmail.com',
          pass: 'Jmac37912!!'
        }
      })
    );

    const body = JSON.parse(req.body);
    
    const string = `
      From: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone}
      Message: ${body.message}
    `;
    
    const mailOptions = {
      from: `${body.name} <grahamdrywall@bar.com>`,
      to: 'ryut13@gmail.com',
      subject: `New Estimate Request from: ${body.name}`,
      text: string,
    };

    // send email through smtp transporter
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send({status:400});
      } else {
        console.log('Email sent: ' + info.response);
        res.send({status:200});
      }
    });
  }
}