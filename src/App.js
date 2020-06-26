import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import FrontPage from './components/Frontpage/FrontPage';
import Homepage from "./components/HomePage/HomePage";
import SecondPage from "./components/SecondPage/SecondPage";
import CreateNoteModal from "./components/SecondPage/SecondPageModal/CreateNoteModal";
//import CreateNote from "./components/SecondPage/SecondPageModal/CreateNote"
import DeleteModal from "./components/SecondPage/SecondPageModal/DeleteModal";
import EditModal from "./components/SecondPage/SecondPageModal/EditModal";
import TodoList from "./components/NavPages/TodosFolder/TodoList";
import MyEvents from "./components/NavPages/Events/MyEvents";
import Archive from "./components/NavPages/Archive/Archive";
import Settings from "./components/NavPages/Setting/Settings";
import NoteDetials from './container/NoteDetails'


const App = () => {
  return (
    <div>
      <Router history={ history }>
        <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/aboutpage" component={Homepage} />
        <Route path="/dash/note" component={SecondPage} />
        <Route path="/create/note" component={CreateNoteModal} />
        <Route path="/delete/note" component={DeleteModal} />
        <Route path="/edit/note" component={EditModal} />
        <Route path="/note/todos" component={TodoList} />
        <Route path="/note/events" component={MyEvents} />
        <Route path="/note/archive" component={Archive} />
        <Route path="/note/setting" component={ Settings } />
          <Route path="/:note_id" component={ NoteDetials } />
          </Switch>
      </Router>
       
    </div>
  );
}

export default App;