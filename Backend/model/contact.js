const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  userid: { type : Number}, 
  name: { type: String},
  status: { type: String},
  email: { type: String},
  number: { type: Number , trim:true},
  location: { 
    long:{type:Number},
    lat:{type:Number}
  },
});

module.exports = mongoose.model("contact", ContactSchema);