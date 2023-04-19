const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser=require("../middleware/fetchuser");


const jwt_SECRET = "surajisgoodboy";

//Testing route -1
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

//Testing route -2
router.get("/data", (req, res) => {
  //send data to database using get reqvest
  // eslint-disable-next-line no-undef
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send(req.body);
});

//Route:1-create a user using:POST "/api/auth/createuser".Doesn't require Auth
router.post(
  //send data using post reqvesy
  //it using express validator
  "/createuser",
  [
    body("name", "enter valid name").isLength({ min: 3 }),
    body("email", "enter valid email").isEmail(),
    body("password", "enter valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
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

      const salt = await bcrypt.genSalt(10); //it is created secuare password
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        //create a new user
        //it is return promises
        name: req.body.name,
        email: req.body.email,
        //password: req.body.password,
        password: secPass,
      });

      const data = {
        //method of json web tokan return secret code
        user: {
          id: user.id, //in mango id has index and retrive data very fast for using id
        },
      };

      const authtokan = jwt.sign(data, jwt_SECRET);
      console.log(authtokan);

      //res.send(req.body);
      //res.json(user);
      success=true;
      res.json({success,authtokan });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//Route:2-create a user using:POST "/api/auth/loginuser".Doesn't require Auth
router.post(
  //send data using post reqvesy
  //it using express validator
  "/loginuser",
  [
    body("email", "enter valid email").isLength({ min: 5 }),
    body("password", "enter valid password").exists(),
  ],
  async (req, res) => {
    let success=false;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body; //destructuring of request body
    //eslint-disable-next-line no-undef
    try {
      let user = await User.findOne({ email }); //check whether the email is exists already using destructuring

      if (!user) {
        return res.status(400).json({ error: "sorry user already exists" });
      }

      let passwordcompare = await bcrypt.compare(password, user.password); //check password match or not using destructuring

      if (!passwordcompare) {
        success=false;
        return res
          .status(400)
          .json({success, error: "please try to login with correct credential" });
      }
      const data = {
        //method of json web tokan return secret code
        user: {
          id: user.id, //in mango id has index and retrive data very fast for using id
        },
      };

      const authtokan = jwt.sign(data, jwt_SECRET);
      console.log(authtokan);

      //res.send(req.body);
      //res.json(user);
      success=true;
      res.json({success, authtokan }); //send response
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//Route:3-create a user using:POST "/api/auth/getuser".Doesn't require Auth

router.post("/getuser",fetchuser, async (req, res) => {    //fetchuser is middlware function
  try {
   const userId=req.user.id;
   const user=await User.findById(userId).select("-password");

    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});



module.exports = router;
