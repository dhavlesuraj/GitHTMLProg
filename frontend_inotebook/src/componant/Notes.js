import React, { useEffect,useRef,useState } from 'react'
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';


const Notes = () => {
  let navigate = useNavigate();
  
  const context = useContext(noteContext);
  const { notes, getNote,editNote } = context; //destructuring
  useEffect(()=>{
    if(localStorage.getItem("tokan"))
    {
      getNote();
    }
    else{
     navigate('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const ref=useRef(null);
  const refClose=useRef(null);

  const updateNote=(currantNote)=>{
   ref.current.click();
   setNotes({id:currantNote._id, etitle:currantNote.title,edescription:currantNote.description,etag:currantNote.tag});
  }

  const [note, setNotes] = useState({id:"", etitle: "", edescription: "", etag: "" });

    const onChange = (e) => {
      setNotes({ ...note, [e.target.name]: e.target.value }); //add value in state array and updsate or overrride
    };

    const handleClick = (e) => {
      console.log("updating Note Successfully",note);
      editNote(note.id,note.etitle,note.edescription,note.etag);
      refClose.current.click();
    };
    
  return (
    <>
      <AddNote />

      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edite Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Tital
                  </label>
                  <input
                    type="text"
                    value={note.etitle}
                    className="form-control"
                    id="etitle"
                    aria-describedby="emailHelp"
                    name="etitle"
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
                    value={note.edescription}
                    className="form-control"
                    id="edescription"
                    name="edescription"
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
                    value={note.etag}
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={note.etitle.length<5 || note.edescription.length<5}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
      <h2>Your Notes</h2>
      <div className='container'>
        {notes.length===0 && 'No Notes To Display'}
      </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}

export default Notes
