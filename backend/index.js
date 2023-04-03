const connectToMongo=require('./db');
connectToMongo();
//start();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const express = require("express");
const app = express();
// const port = 4000;
const port = process.env.PORT || 4000;


app.use(express.json());  //midelwear
app.use(helmet());
app.use(morgan("common"));

dotenv.config({ path: "./config/config.env" });

//Available Routes
app.use("/api/auth",require("./routes/auth"));
//app.use("/api/notes",require("./routes/notes"));


// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });


 app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
   console.log(`Example app listening at http://localhost:${port}`)
});
  


