const nodemailer= require("nodemailer");
const logger = require("../utils/logger");
const ejs=require('ejs')
// function sendemails(subject,message,receipents,response){
//     console.log("reciepitent",receipents)
//     // console.log("response is",response);
// nodemailer.createTestAccount((error,account)=>{
//     console.log("acount is",account);
//     console.log("++++++++++++++++++_____________",error)
//     let trans = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         secureConnection: false,
//         port: 465,
//         secure: true,
//         service:'gmail',
//         tls: {
//             rejectUnauthorized: true
//           },
//         auth:{
//             user:'saurabhsingh836847@gmail.com',
//             pass:'saurabh@2908'
//         }
//     });
//     let mailOption={
//         from:'saurabhsingh836847@gmail.com',   //sender address
//         to:receipents,
//         subject:subject,
//         text:message,
        
//     };
//     trans.sendMail(mailOption,(error,info)=>{
//         console.log(",mailoption",mailOption);
//         console.log("error***********************************************",error);
//         logger.debug("error is************",info)
//         if(error){
//             console.log("error is0000000000000000000000000",error)
//             // response.send('cant send mail some error');
//           logger.debug("error aa gya", info);
//         }
//         else{
//             console.log("i am in success part+++++++++++++++++++++++++++",info)
//             response.send('conrats account has been created,check mail information...');
//         }
//             })
// });

// }
// module.exports =sendemails;

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secureConnection: false,
    port: 465,
    secure: true,
    tls: {
      rejectUnauthorized: true
    },
    auth: {
      user: 'saurabhsingh836847@gmail.com',
      pass: 'saurabh@2908'
    }
  })
  var controller = {
    sendMail: function (subject,message,to,template,data) {
      return new Promise((resolve, reject) => {
        var templateDir = require('path').join(__dirname, '../', template)
        console.log(templateDir);
        ejs.renderFile(templateDir + '.ejs', data, function (err, data) {
          if (err) {
            reject(err)
          }
          else {
            // console.log(to, '^^^^')
            var mainOptions = {
              from: 'saurabhsingh836847@gmail.com',
              to: to,
              subject: subject,
              // text: data,
              html: data
            };
          };
          transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
              console.log(err);
            } else {
              console.log('Message sent: ' + info.response);
              response.send(info)
            }
          });
        })
      })
    }
  }
  
  module.exports = controller  
