import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Alert from "./Alert";

const AddNote = () => {
    const context=useContext(noteContext);
    const{addNote}=context;
    const [note, setNotes]=useState({title:"",description:"",tag:""});

    const onChange=(e)=>{
        setNotes({...note,[e.target.name]:e.target.value})  //add value in state array and updsate or overrride
    }

    const handleClick=(e)=>{
      e.preventDefault();  //it is use to do not page relod
      addNote(note.title,note.description,note.tag);        //useContextapi
      setNotes({title:"",description:"",tag:""});
    }
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tital
            </label>
            <input
              type="text"
              value={note.title}
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              value={note.description}
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              value={note.tag}
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={note.title.length<5 || note.description.length<5}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote
