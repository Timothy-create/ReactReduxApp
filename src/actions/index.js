import { SELECT_NOTE, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './type'

export const selectNote = (note) => {
  return {
    type: SELECT_NOTE,
    payload: note
  }
}

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};


export const addNote = (notes) => {
  return {
    type: ADD_NOTE,
    payload: notes
  }
}

export const editNote = (notes) => {
  console.log(notes)
  return {
    type: UPDATE_NOTE,
    payload: notes
  }
}

// export const updateNote = (notes) => {
//   return {
//     type: UPDATE_NOTE,
//     payload: notes
//   }
// }

