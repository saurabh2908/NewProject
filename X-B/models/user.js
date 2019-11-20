const mongoose = require('./connection');
const mongooses= require('mongoose');
const Schema = mongooses.Schema;
// console.log("schema is",Schema);
var express = require('express');

var router = express.Router();
const userSchema = new Schema({

  'email': { type: String, unique: true, required: true },
  'name': { type: String },
  'password': { type: String, unique: true, required: true }
})

// const personSchema = Schema({
//   _id: Schema.Types.ObjectId,
//   name: String,
//   age: Number,
//   stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

const storySchema = Schema({
  merge: { type: Schema.Types.ObjectId, ref: 'Data' },
  title: String,
  // fans: [{ type: Schema.Types.ObjectId, ref: 'Data' }]
});

const merge = Schema({
  _id: Schema.Types.ObjectId,
 name:String,

});

const Story = mongoose.mongoose1.model('Storys',storySchema)

const Merge= mongoose.mongoose3.model('Datas',merge)

router.post('/types', function (req, res) {
  const merge= new Merge({
    _id: new mongooses.Types.ObjectId(),
    name:"raman singh"
  });
  merge.save(function(err,res){
    if(err) return handleError(err);
    else{
      console.log(res)
    }

    const story1 = new Story({
      title: 'Casino Royale',
      merge: merge._id    // assign the _id from the person
    });

    story1.save(function (err,res) {
      if (err) return handleError(err);
      else{
        console.log(res)
      }
      // thats it!
    });
  });
})

router.get('/mydata', function (req, res) {
  Story.
    find().
    populate({path:'merge',model:Merge}).
    exec(function (err, story) {
      if(err){
        console.log(err)
      }
      else{
        console.log(story);
      }
      // prints "The author is Ian Fleming"
    });
})




module.exports = router;
// module.exports = {
//   userSchema: userModel,
//   storyModel: storyModel,
//   personModel: personModel
// }