import React, {useContext} from 'react';
//import SideBarLinks from './SideBarLinks';
import NoteContext from './NoteContext'

const Note = ({note}) => {
  const { dispatch } = useContext(NoteContext)
  return (
    <div>
      <div id="section-nav2">
        <div className=" side-bar">
          <h4>{note.title}</h4>
          <p className="p-tag">{note.text}</p>

          <button
            onClick={() =>
              dispatch({ type: "SET_CURRENT_NOTE", payload: note })
            }>
            Edit
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE_NOTE", payload: note.id })}>
            Delete
          </button>
        </div>
        <p className="border"></p>
      </div>
    </div>
  );
}



export default Note;