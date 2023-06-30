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
      _id: "649c10bff7fb5037e6c9d718",
      user: "649aa71ac4d67e54d8235afe",
      title: "My Title",
      description: "Please wake me up.",
      tag: "personal",
      date: "2023-06-28T10:51:43.477Z",
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
      _id: "649c10bff7fb5037e6c9d718",
      user: "649aa71ac4d67e54d8235afe",
      title: "My Title",
      description: "Please wake me up.",
      tag: "personal",
      date: "2023-06-28T10:51:43.477Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
