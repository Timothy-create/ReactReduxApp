import React, { useState, useRef, useEffect, useContext } from 'react';
import NoteContext from './NoteContext'



const NoteCreating = () => {
      const { dispatch } = useContext(NoteContext);
      const [value, setValue] = useState("");

      let ref = useRef();

      useEffect(() => {
        ref.current.focus();
      }, []);

      const handleChange = (event) => {
        setValue(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim() === "") {
          alert("Cannot add a blank note");
        } else {
          dispatch({ type: "ADD_NOTE", payload: value });
          setValue("");
        }
      };
     return (
       <div>
         <form onSubmit={handleSubmit}>
           <input type="text" onChange={handleChange} value={value} ref={ref} />
           <button>Create Note</button>
         </form>
       </div>
     );
   };
 

export default NoteCreating;