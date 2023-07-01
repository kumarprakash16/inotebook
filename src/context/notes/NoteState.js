import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "649c10bef7fb5037e6c9d716",
      user: "649aa71ac4d67e54d8235afe",
      title: "My Title",
      description: "Please wake me up.",
      tag: "personal",
      date: "2023-06-28T10:51:42.960Z",
      __v: 0,
    },
    {
      _id: "649c10bff7fb5037e6c9d718",
      user: "649aa71ac4d67e54d8235afe",
      title: "My Title",
      description: "Please wake me up.",
      tag: "personal",
      date: "2023-06-28T10:51:43.477Z",
      __v: 0,
    },
    {
      _id: "649c10bff7fb5037e6c9d730",
      user: "649aa71ac4d67e54d8235afe",
      title: "My Title",
      description: "Please wake me up.",
      tag: "personal",
      date: "2023-06-28T10:51:43.477Z",
      __v: 0,
    },
    {
      _id: "649c10bff7fb5037e6c9d728",
      user: "649aa71ac4d67e54d8235afe",
      title: "My Title",
      description: "Please wake me up.",
      tag: "personal",
      date: "2023-06-28T10:51:43.477Z",
      __v: 0,
    },
    {
      _id: "649c10bff7fb5037e6c9d729",
      user: "649aa71ac4d67e54d8235afe",
      title: "My Title",
      description: "Please wake me up.",
      tag: "personal",
      date: "2023-06-28T10:51:43.477Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag)=>{
    // To API Call
    const note = {
      _id: "649c10bff7fb5037e6c9d729",
      user: "649aa71ac4d67e54d8235afe",
      title: title,
      description: description,
      tag: tag,
      date: "2023-06-28T10:51:43.477Z",
      __v: 0,
    }
      setNotes(notes.concat(note));
  }

  // Delete a node
  const deleteNote = ()=>{

  }

  // Edit a node
  const editNote =()=>{

  }



  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
