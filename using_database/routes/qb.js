
const express = require("express");
const con = require("../utils/database");
const app=express();
app.use(express.json());


app.get("/", (req, res) => {             //get data
     con.query("SELECT * FROM employee", (err, results, fields) => {
       if (!err) {
         res.send(results);
         console.log(results);
       } else {
         console.log(err);
       }
    });
 
 });


app.post("/",(req,res)=>{                  //insert data
    // console.log(req.body.email);
    // console.log(req.body.age);
    // console.log(req.body.gender);
    const data=req.body;
    con.query("INSERT INTO employee SET ?",data,(err,results)=>{
    if(err) throw err;
    res.send(results);
    })
});

// app.delete("/:id",(req,res)=>{
//   console.log(req.body.employee.id);
// })


app.delete("/:id",(req,res)=>{
   //console.log(req.params.id);
    con.query("DELETE FROM employee WHERE id ="+req.params.id,(err,result)=>{
    if (err) throw err;
    res.send(result);
    });
});




// app.get("/:id",(req,res)=>{
//   console.log(req.body.id);

// })
app.put("/:id",(req,res)=>{                //update data
  console.log(req.params.id);
   console.log(req.body.email);
   console.log(req.body.age);
   console.log(req.body.gender);
  const data = [
    req.body.email,
    req.body.age,
    req.body.gender,
    req.params.id,
  ];
  con.query("UPDATE employee SET email=?,age=?,gender=? WHERE id=?",data,(err,result)=>{
     if (err) throw err;
     res.send(result);
  })
});
module.exports = app;