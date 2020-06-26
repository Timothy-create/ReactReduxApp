import React from 'react';
import Header from './Header';
import Nav from './Nav';
//import SideBar from './SideBar';
//import Content from './Content';
import ContentModal from './ContentModal';
import './secondPage.css';

// import NoteContext from './NoteContext'
// import notesReducer from './reducer'
//import NoteList from './NoteList'
// import NoteCreating from './NoteCreating';
// import CreateNoteModal from './SecondPageModal/CreateNoteModal';







import NoteList from '../../container/NoteList'
import ShowNote from '../../container/ShowNote'
import NoteDetails from '../../container/NoteDetails';

const SecondPage = () => {
  // const initialState = useContext(NoteContext)
  // const [state, dispatch] = useReducer(notesReducer, initialState)
  // console.log(state)
  return (
    <div id="main-container2">
      <Header />
      <nav>
        <Nav />
      </nav>

      <div id="main-content-wrapper">
        <section id="second-sectionPage">
          <NoteList />
          {/* <NoteContext.Provider value={{ state, dispatch }}>
            <NoteCreating />
            <NoteList />
            <CreateNoteModal value={{dispatch}} />
          </NoteContext.Provider> */}
          <div id="second-section-wrapper">
            {/* <ShowNote />  */}
             {/* <NoteDetails />  */}
            {/* <Content /> */}
            {/* <ContentModal /> */}
          </div>
        </section>
      </div>
    </div>
  );
}
  
export default SecondPage;

