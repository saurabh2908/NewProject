const express =require("express");
const passport = require("passport");
const logger = require("../utils/logger");
const routes =express.Router();
const mail=require("../utils/mail");
const user=require("../db/models/schema");
// routes.get('/google',passport.authenticate('google',{scope:['profile','email']}));
// routes.get('/dashboard',passport.authenticate('google'),(req,res)=>{
//     console.log("request is" ,req);
//     let mail =require('../utils/mail');
//     // console.log("++++++++++++++++++++++++++",req.user.pic);

    
//     logger.debug('Inside google authentication '+req.body);
     
   

// });
routes.post('/send',(req,res)=>{
    res.render('home')
    console.log("++++++++++++++++++++",req.body.userEmail);
    mail.sendMail("Verify your email", "<fqadmin@freequency.in>",req.body.userEmail , 'views/home', { email: req.body.email }).then(resp => {
        // console.log(resp)
      }, err => {
        console.log(err)
      })
})
routes.get('/',(req,res)=>{
    console.log("i am at login",req.body)
    res.render('login')
})
module.exports=routes;