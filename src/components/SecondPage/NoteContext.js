import React from 'react';

const NotesContext = React.createContext({
  currentNote: null,
  notes: [
    { id: 1, title: "Note1", text: " Hello world" },
    { id: 2, title: "Note2", text: "Take out trash" },
    { id: 3, title: "Note3", text: "Do home work" },
    
  ]
});

export default NotesContext;