import React, { useContext } from 'react'
import NoteContext from './NoteContext'
import Note from './Note'

const NotesList = () => {
 const {state} = useContext(NoteContext)
  return ( 
    <div>
      { state.notes.map((note) => {
        return <Note note={note} key={note.id} />
      }) }
    </div>
   );
}
 
export default NotesList;