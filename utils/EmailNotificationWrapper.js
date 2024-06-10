// /**
//     Author      : Avinash Mweshram
//     Created At  : 102-05-2023
//     Description : Customized Functions for Email Notifications
//  */

// /**
//  * sendEmailNotification() is used to send email notification to the parameters given
//  */
// const nodemailer = require("nodemailer")

// const emailTransporter = nodemailer.createTransport({
//     service: "Outlook365",
//     host: "smtp.office365.com",
//     port: "587",
//     tls: {
//         ciphers: "SSLv3",
//         rejectUnauthorized: false,
//     },
//     auth: {
//         user: 'harshad.i@foxberry.in',
//         pass: 'Indalkar@4321'
//     }
// })

// function sendEmailNotification(arrayOfMailAddress, subject, text, html, res) {
//     try {
//         var mailOptions = {
//             from:"harshad.i@foxberry.in",
//             to: arrayOfMailAddress,
//             subject: subject,
//             text: text,
//             html: html
//         };

//         emailTransporter.sendMail(mailOptions, function(error, info) {
//             if (error) {
//                 logger.warn("Error occured in EmailNotificationWrapper.sendEmailNotification.sendMail: ", error)
//             } else {
//                 return res;
//             }
//         })
//     } catch (e) {
//         // console.log("------emailTransporter.catch--------",e)
//         logger.warn("Error occured in EmailNotificationWrapper.sendEmailNotification: ", e)
//         return e;
//     }
// };

// function sendEmailNotificationWithOutResponse(arrayOfMailAddress, subject, text, html) {

//     return new Promise(function(resolve, reject) {
//         try {
//             var mailOptions = {
//                 from: 'harshad.i@foxberry.in',
//                 to: arrayOfMailAddress,
//                 subject: subject,
//                 text: text,
//                 html: html
//             };

//             emailTransporter.sendMail(mailOptions, function(error, info) {
//                 if (error) {
//                     logger.warn("Error occured in EmailNotificationWrapper.sendEmailNotification.sendMail: ", error)
//                     reject(error)
//                 } else {
//                     resolve(info)
//                 }
//             })
//         } catch (err) {
//             logger.warn("Error occured in EmailNotificationWrapper.sendEmailNotification: ", err)
//             reject(err)
//         }
//     })



// };
// /// --- Exports
// module.exports = {
//     sendEmailNotification: sendEmailNotification,
//     sendEmailNotificationWithOutResponse: sendEmailNotificationWithOutResponse

// }