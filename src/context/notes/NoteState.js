import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YWE3MWFjNGQ2N2U1NGQ4MjM1YWZlIn0sImlhdCI6MTY4NzkzNzYzNn0.heCib1qlQoVL5WTrNuzHmDCJs6A1PzVyZQWntuFfaAE",
      },
    });
    const json = await response.json();
    // setNotes()
    setNotes(json)
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YWE3MWFjNGQ2N2U1NGQ4MjM1YWZlIn0sImlhdCI6MTY4NzkzNzYzNn0.heCib1qlQoVL5WTrNuzHmDCJs6A1PzVyZQWntuFfaAE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();
    // eslint-disable-next-line
    const json = await response.json();
    console.log(json);
   
    const note = {
      _id: "649c10bff7fb5037e6c9d729",
      user: "649aa71ac4d67e54d8235afe",
      title: title,
      description: description,
      tag: tag,
      date: "2023-06-28T10:51:43.477Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a node

  const deleteNote = async (id) => {
    // TODO: API Call
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YWE3MWFjNGQ2N2U1NGQ4MjM1YWZlIn0sImlhdCI6MTY4NzkzNzYzNn0.heCib1qlQoVL5WTrNuzHmDCJs6A1PzVyZQWntuFfaAE",
      }
    });
    // eslint-disable-next-line 
    const json = response.json();
    console.log(json);
   
    
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a node

  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YWE3MWFjNGQ2N2U1NGQ4MjM1YWZlIn0sImlhdCI6MTY4NzkzNzYzNn0.heCib1qlQoVL5WTrNuzHmDCJs6A1PzVyZQWntuFfaAE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
      
    }
    setNotes(newNotes); 
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
