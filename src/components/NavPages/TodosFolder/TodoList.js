import React from 'react';
import history from '../../../history'
import Header from '../../SecondPage/Header'
import TodoNav from './TodoNav'
import Todos from './Todos';
import TodoHeader from './TodoHeader';
import AddTodo from './AddTodo';
import './mytodo.css';

class TodoList extends React.Component {
  state = { 
    todos: [],
    completed: true
  }
  
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  handleDelete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id  !== id
    )]
    })
  }

  addTodo = (title) => {
    title.id = Math.random()
    let todos = [...this.state.todos, title]
    this.setState({ todos })
  }

  componentWillMount () {
    localStorage.getItem('todos') && this.setState({
      todos: JSON.parse(localStorage.getItem('todos')),
      completed: false
    })
  }
  
  componentWillUpdate (nextProps, nextState) {
    localStorage.setItem("todos", JSON.stringify(nextState.todos))
    localStorage.setItem('contactDate', Date.now())
  }

  render() { 
    return (
      <div>
        <Header />
        <nav>
          <TodoNav />
        </nav>
        <div className="todo-container">
          <TodoHeader />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            handleDelete={this.handleDelete}
          />
          <button
            className="cancel-btn"
            onClick={() => history.push("/dash/note")}>
            Home Page
          </button>
        </div>
      </div>
    );
  }
}
 
export default TodoList;