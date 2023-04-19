import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Call Api Get All data
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-tokan":localStorage.getItem('tokan')
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzU1YjQ1M2Y5MTRhYzM0ODMxMWVhIn0sImlhdCI6MTY4MDY3Mjk3M30.dZJiqooK7tIAv7O-c9Jrok_xXTEKOWQcgunXhzRR-Bc",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-tokan": localStorage.getItem("tokan"),
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzU1YjQ1M2Y5MTRhYzM0ODMxMWVhIn0sImlhdCI6MTY4MDY3Mjk3M30.dZJiqooK7tIAv7O-c9Jrok_xXTEKOWQcgunXhzRR-Bc",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json =await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    //Todo:Api call
    // console.log("adding a new note");
    setNotes(notes.concat(json)); //concat function return a aaray
  };

  //Delete Note
  const deleteNote = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-tokan": localStorage.getItem("tokan"),
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzU1YjQ1M2Y5MTRhYzM0ODMxMWVhIn0sImlhdCI6MTY4MDY3Mjk3M30.dZJiqooK7tIAv7O-c9Jrok_xXTEKOWQcgunXhzRR-Bc",
      },
    });
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json);
    // console.log("this note id is=" + id);
    const newNotes = notes.filter((n) => {
      return n._id !== id;
    }); //using es6 filter method
    setNotes(newNotes);
  };

  //Edit Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-tokan": localStorage.getItem("tokan"), 
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzU1YjQ1M2Y5MTRhYzM0ODMxMWVhIn0sImlhdCI6MTY4MDY3Mjk3M30.dZJiqooK7tIAv7O-c9Jrok_xXTEKOWQcgunXhzRR-Bc",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    // eslint-disable-next-line
    const json = await response.json(); // parses JSON response into native JavaScript objects
    // console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
