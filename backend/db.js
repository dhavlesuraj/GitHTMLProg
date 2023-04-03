const mongoose = require('mongoose');
 const mongoURI= "mongodb+srv://dhavlesuraj69:XM0LB2ugl5gTqs2X@dhavlesurajapi.ftarwug.mongodb.net/dhavlesurajapi?retryWrites=true&w=majority";
 //const mongoURI = "mongodb://localhost:27017/test";
 // eslint-disable-next-line no-unused-vars

// const connectToMongo=async ()=>{
//   try {
//     //Database Connect
//     await mongoose.connect(
//       // process.env.mongoURI,
//       "mongodb://localhost:27017/",
//       {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       },
//       () => {
//         console.log("Database Connected");
//       }
//     );
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await mongoose.connection.close();
//   } 
// }
mongoose.set("strictQuery", false);
            // OR
const connectToMongo=()=>{
    mongoose.connect(mongoURI,(err)=>{
        if(!err)
        {
            console.log("connected to mongo");
        }
        else{
            console.log("connection faill "+""+err);
        }
    })
}
module.exports=connectToMongo;