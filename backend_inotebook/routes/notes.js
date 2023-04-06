const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//Routes:1-get all notes using :Get"/api/notes/fetchallnotes. Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Routes:2-add a new notes using :post"/api/notes/addnote. Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "valid tital").isLength({ min: 3 }), //validation using express valoidator
    body("description", "Description must be at list 5 caracter").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body; //destructering
      const error = validationResult(req);
      if (!error.isEmpty()) {
        //if there are error then return bad request and error
        return res.status(400).json({ error: error.array() });
      }

      const note = new Note({
        //destructuring
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//Routes:3-update a new notes using :post"/api/notes/updatenote. Login required

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body; //destructuring
  try {
    const newNote = {};   //create a newNote object
    if (title) {
      newNote.title = title
    };
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find the note to be updated and updated it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Note Allowed");
    }

    note = await Note.findByIdAndUpdate(        //find note check all condition using id and update note
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({note});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
}); 

//Routes:4-Delete a new notes using :delete"/api/notes/deletenote. Login required
router.delete("/deletenote/:id",fetchuser,async(req,res)=>{
  try {

    //find the note to be updated and updated it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Note Allowed");
    }

    note = await Note.findByIdAndDelete(   //check all condition and then delete note
      //find note using id and update
      req.params.id,
    );
    res.json("Note Deleted Successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
})
module.exports = router;
