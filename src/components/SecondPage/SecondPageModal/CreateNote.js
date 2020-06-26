import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {createNote } from '../../../actions'

class CreateNote extends React.Component {

  renderError = ({touched, error}) => {
    if (touched && error) {
      return (
        <div className="ui error">
          <div>{ error }</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const ClassName = `field ${meta.touched && meta.error ? "error" : ""}`
    return (
      <div className={ClassName}>
        <label>{ label}</label>
        <input { ...input } autoComplete="off" />
        <div>{ this.renderError(meta) }</div>
      </div>
    ); 
  }
  
  renderTextInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <textarea {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    ); 
  }

  onSubmit = (formValues) => {
   this.props.createNote(formValues)
  }

  render () { 
    return (
      <div>
        <h1>Create New Note</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter Title" />
          <Field name="content" component={ this.renderTextInput } label="Enter your note content" />
          <button>Submit</button>
        </form>
      </div>
      );
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = "You must enter a title"
  }
  if (!formValues.content) {
    errors.content = "You must enter a content"
  }
  return errors;
}
 
const formWrapped = reduxForm({
  form: "noteCreate",
  validate
}) (CreateNote);

export default connect(null, {createNote}) (formWrapped)