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
    console.log(json);
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

  const deleteNote = (id) => {
    // TODO: API Call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a node

  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YWE3MWFjNGQ2N2U1NGQ4MjM1YWZlIn0sImlhdCI6MTY4NzkzNzYzNn0.heCib1qlQoVL5WTrNuzHmDCJs6A1PzVyZQWntuFfaAE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
