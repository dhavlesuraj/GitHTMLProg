const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");

const jwt_SECRET="surajisgoodboy";

//create a user using:POST "/api/auth/createuser".Doesn't require Auth

// router.post(
//   "/",(req, res) => {
//     //     let obj={
//     //       a:'Amol',
//     //       number:11
//     //     }
//     //   res.json(obj)
//     console.log(req.body);
//     const user = User(req.body);
//     user.save();
//     res.send(req.body);
//    });

router.get("/data", (req, res) => {   //send data to database using get reqvest
  // eslint-disable-next-line no-undef
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send(req.body);
});

router.post(                  //send data using post reqvesy
  //it using express validator
  "/createuser",
  [
    body("name", "enter valid name").isLength({ min: 3 }),
    body("email", "enter valid email").isEmail(),
    body("password", "enter valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //eslint-disable-next-line no-undef
    try {
      let user = await User.findOne({ email: req.body.email }); //check whether the email is exists already
      console.log(user);
      if (user) {
        return res.status(400).json({ error: "sorry user already exists" });
      }

      const salt=await bcrypt.genSalt(10);        //it is created secuare password
      const secPass=await bcrypt.hash(req.body.password,salt);

      user = await User.create({     //create a new user
        //it is return promises
        name: req.body.name,
        email: req.body.email,
        //password: req.body.password,
        password:secPass
      });

      const data={               //method of json web tokan return secret code 
        user:{
          id:user.id          //in mango id has index and retrive data very fast for using id
        }
      }

      const authtokan=jwt.sign(data,jwt_SECRET);
      console.log(authtokan);

      //res.send(req.body);
      //res.json(user);
      res.json({authtokan});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
