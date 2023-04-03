const express=require('express')
const router=express.Router();
const User=require('../models/User')
const { body, validationResult } = require('express-validator');


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

router.get('/',(req,res)=>{
  // eslint-disable-next-line no-undef
  console.log(req.body);
  const user=User(req.body);
  user.save();
  res.send(req.body);
})

router.post(          //it using express validator
  '/createuser',[
  body('name','enter valid name').isLength({min:3}),
  body('email','enter valid email').isEmail(),
  body('password','enter valid password').isLength({ min: 5 }),
  ],(req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
    //eslint-disable-next-line no-undef
    User.create({            //it is return promises
      name:req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .then(user => res.json(user))
    .catch(err=>{console.log(err)
    res.json({error:"Please enter a unique value for email",message:err.message})});
  }
);

module.exports=router