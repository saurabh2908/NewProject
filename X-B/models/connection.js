const mongoose = require('mongoose');
const mongoURl = require('../utils/env');
let mongoose1=mongoose.createConnection(mongoURl.env1)
let mongoose2=mongoose.createConnection(mongoURl.env2)
let mongoose3= mongoose.createConnection(mongoURl.env3)
mongoose1.on('open',()=>{
   console.log('connected to Database ');
   console.log("mongoDB",mongoURl.env1);
})
mongoose2.on('open',()=>{
   console.log('connected to Database ');
   console.log("mongoDB",mongoURl.env1);
})

mongoose3.on('open',()=>{
   console.log('connected to Database ');
   console.log("mongoDB",mongoURl.env3);
})
module.exports={
   mongoose1:mongoose1,
   mongoose2:mongoose2,
   mongoose3:mongoose3
}
