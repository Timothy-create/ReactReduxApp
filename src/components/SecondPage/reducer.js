
import{v4 as UUID }from 'uuid';

 const reducer = (state, action) =>{
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        currentNote: action.payload
      }
    case 'DELETE_NOTE':
      const deleteNote = state.notes.filter(
        note => note.id !== action.payload
      );
      return {
        ...state,
        notes: deleteNote
      }
    // case 'ADD_TITLE':
    //   const newTitle = {
    //     id: UUID.v4(),
    //     text: action.payload
    //   }
    //   const newTitleAdded = [...state.notes, newTitle]
    //   return {
    //     ...state,
    //     notes: newTitleAdded
    //   }
    case 'ADD_NOTE':
      const newNote = {
        id: UUID(),
        text: action.payload
      }
      
      const newNoteAdded = [...state.notes, newNote]
      return {
        ...state,
        notes: newNoteAdded
      }
    
    default:
      return state
  }
}

export default reducer;