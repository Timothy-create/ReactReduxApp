//import {combineReducers} from 'redux'
import { SELECT_NOTE, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE} from '../actions/type'
import { v1 as uuidv1 } from 'uuid'

const initState = {
  notes: [
    {
      id: uuidv1(),
      title: "10 Hours Fasting Every Week",
      content: `  Exercitation in consectetur velit enim ullamco aliqua officia mollit
            eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation
            minim adipisicing minim velit. Id elit culpa aute est. Aute aute
            excepteur et adipisicing adipisicing officia dolor. Commodo
            incididunt ad labore incididunt aliquip deserunt anim eu incididunt
            est mollit. Proident aliqua non aliquip dolore sint voluptate
            adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui
            excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et
            velit est nulla. In consectetur nisi duis ad quis magna anim ut
            dolor minim irure proident do irure. Sit do quis sunt consequat id
            incididunt quis.`,
    },
    {
      id: uuidv1(),
      title: "Visit Plateau State",
      content: `    Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
          elit incididunt irure nisi duis aliquip anim velit. Officia laborum
          consectetur quis ea pariatur proident exercitation.`,
    },
    {
      id: uuidv1(),
      title: "Birthday Debrief",
      content: `  Exercitation in consectetur velit enim ullamco aliqua officia mollit
            eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation
            minim adipisicing minim velit. Id elit culpa aute est. Aute aute
            excepteur et adipisicing adipisicing officia dolor. Commodo
            incididunt ad labore incididunt aliquip deserunt anim eu incididunt
            est mollit. Proident aliqua non aliquip dolore sint voluptate
            adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui
            excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et
            velit est nulla. In consectetur nisi duis ad quis magna anim ut
            dolor minim irure proident do irure. Sit do quis sunt consequat id
            incididunt quis.`,
    },
    {
      id: uuidv1(),
      title: "Learn Darts",
      content: `    Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut
          elit incididunt irure nisi duis aliquip anim velit.`,
    },
  ],
};

export default function (state = initState, action) {
 
  switch (action.type) {
    case SELECT_NOTE:
      return {
        ...state,
      };
    // return action.payload;

    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case DELETE_NOTE:
      console.log(action)
      if (DELETE_NOTE) {
        let newNotes = state.notes.filter(note => {
         return action.payload !== note.id
        })
        return {
          ...state,
          notes: newNotes
        }
      }
     
    case UPDATE_NOTE:
      console.log(action)
      const updatedNote = {
        ...state.notes,
        notes: action.payload
      }

      const updatedNoteIndex = state.notes.findIndex(
        note => note.id === state.notes.id
      )

      const updatedNotes = [
        ...state.notes.slice(0, updatedNoteIndex),
        updatedNote,
        ...state.notes.slice(updatedNoteIndex + 1)
      ]
      
      return {
        state: null,
        notes: updatedNotes
      }

      
    default:
      return state;
  }
};
  
