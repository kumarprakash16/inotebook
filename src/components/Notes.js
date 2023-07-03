import React, { useContext, useEffect, useRef, useState} from "react";
import noteContext from "../context/notes/noteContext";
import { Noteitem } from "./Noteitem";
import { AddNote } from "./AddNote";


export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() =>{
    getNotes()  
    // eslint-disable-next-line
  }, [])

  const updateNote = (currentNote) => {
      ref.current.click();
      setnote({etitle: currentNote.title, edescription: currentNote.description ,etag: currentNote.tag})
  }

  const ref = useRef(null);
  const [note, setnote] = useState({etitle:"",edescription:"",etag:""});
  const handleClick =(e)=>{
    console.log("Updating the note..",note);
    e.preventDefault();
}
const onChange = (e)=>{
    setnote({...note,[e.target.name]: e.target.value});
}
  return (
    <>
    <AddNote/>


<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Edit note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <div className="container my-3">
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="etitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            value={note.etitle}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="edescription"
            value={note.edescription}
            name="edescription"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name="etag"
            value={note.etag}
            onChange={onChange}
          />
        </div>
        </form>
        </div>


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update note</button>
      </div>
    </div>
  </div>
</div>
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
};
