import React from 'react';
import { connect } from 'react-redux';
import {deleteNote} from '../actions'
import SideBarLinks from '../components/SecondPage/SideBarLinks';

class ShowNote extends React.Component {
  handleDelete = (id) => {
    this.props.deleteNote(id);
    console.log("deleting")
  };

  render() {
    console.log(this.props);
    if (!this.props.state) {
      return (
        <div>
          <h2>Select a note to read</h2>
        </div>
      );
    }
    return (
      <div id="section-main-body">
        <div className="section-main-body-wrapper">
          <div>
            <h2>{this.props.note.title}</h2>
          </div>
          <div>
            <div className="p-tag1">
              {this.props.note.content}
              <br />
               {/* <button onClick={() => deleteNote(this.props.note)}>Delete</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps (state) {
  console.log(state)
  return {
    note: state.notes.notes
  }
}

// function mapDispatchToprops (dispatch) {
//   return {
//     deleteNote : (id) => {dispatch({type: "DELETE_POST", payload: id})}
//   }
// }

export default connect(mapStateToProps, {deleteNote})(ShowNote);


// class ShowNote extends React.Component{
//   render () {
//     const note = this.props.note ? (
//       <div id="section-main-body">
//         <div className="section-main-body-wrapper">
//           <div>
//              <h2>{this.props.note.title}</h2>
//           </div>
//           <div className="p-tag1">
//             <div>
//               { this.props.note.content }
//               {/* <SideBarLinks /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     ) : (
//       <div> Select a note to read </div>
//     );
//     return (
//       <div id="section-main-body">
//         {note}
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state, id) => {
//   // let id = ownProps.match.params.selectNote
//   return {
//     note: state.notes
//   }
// }

// export default connect(mapStateToProps)( ShowNote);




