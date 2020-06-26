export default function (state=null, action) {
  switch (action.type) {
    case "NOTE_SELECTED":
      return action.payload;

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    // case "ADD_NOTE_TITLE":
    //   const newNote = {
    //     id: Math.random(),
    //     title: action.payload,
    //   };

    //   const newNoteAdded = [...state.notes, newNote];
    //   return {
    //     ...state,
    //     notes: newNoteAdded,
    //   };
    // case "CREATE_NOTE":
    //    const newNote = {
    //     id: Math.random(),
    //     formValues: action.payload,
    //   };

    //   const newNoteAdded = [...state.notes, newNote];
    //   return {
    //     ...state,
    //     notes: newNoteAdded,
    //   };
    default:
      return state;
  }
}