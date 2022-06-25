const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
require("./config/database").connect();

const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const User = require("./model/user");
const Contact = require("./model/contact");
// Logic goes here
app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  
  app.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  
  const auth = require("./middleware/auth");

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
// add contact
app.post("/addcontact", async (req, res) => {
      const contact = new Contact(req.body) ;    
      const oldContact = await Contact.findOne({userid:req.body.userid , number:req.body.number });
      if (oldContact) {
        return res.status(409).send("Contact Already Exist. Please Login");
      }
      try {
        contact.save();
      res.status(201).json(contact);
    }catch (err) {
      console.log(err);
    }
  });
  //delete contact
  app.delete("/deletecontact", async (req, res) => {    
    const contact = await Contact.findOne({_id: req.body._id }).deleteOne();
    try {
    res.send("deleted");
  }catch (err) {
    console.log(err);
  }
});
// get contacts for specific id
  app.post("/getcontacts", async (req, res) => {    
    const contact = await Contact.find({ userid : req.body.userid });
    try {
    res.send(contact);
    res.status(201).json(contact);
  }catch (err) {
    console.log(err);
  }
});

// search for specific number or 
app.post("/search", async (req, res) => {    
    const contact = await Contact.find({
        "$or":[
            {name:{$regex:req.body.name}},
         //   {number:req.body.number }
        ] });
    try {
    res.send(contact);
    res.status(201).json(contact);
  }catch (err) {
    console.log(err);
  }
});
module.exports = app;
