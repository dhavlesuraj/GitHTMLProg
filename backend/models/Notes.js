const mongoose = require("mongoose");
const { Schema } = mongoose;

// eslint-disable-next-line no-undef
const NotesSchema = new Schema({    //Schema mens given formate 
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default:"General"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("notes", NotesSchema);// bydefault gives two parameters 1-name 2-Schema
