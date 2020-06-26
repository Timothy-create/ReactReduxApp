export default function (state = null, action) {
  switch (action.type) {
    case "CREATE_NOTE":
      const newNote = {
        id: Math.random(),
        formValues: action.payload,
      };

      const newNoteAdded = [...state.notes, newNote];
      return {
        ...state,
        notes: newNoteAdded,
      };
    default:
      return state;
  }
}
