const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

// const sendMail = (email, name, subject, text, cb) => {
//     const mailOptions = {
//         from: email,
//         to: 'davidedefeudis@gmail.com',
//         name,
//         subject,
//         text // does not accept empty text
//     }

//     transporter.sendMail(mailOptions, (err, data) => {
//         if (err) {
//             cb(err, null)
//         }
//         else {
//             cb(null, data)
//         }
//     })
// }

module.exports = sendMail
