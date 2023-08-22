import React from 'react';
import Form from './Form';
import TodoList from './TodoList'


const initialTodos = [
  {
    name:'', id: Date.now(), completed: false
}
]

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos: initialTodos
    }
  }

addTodo = (name) => {
  this.setState({
    ...this.state,
    todos: this.state.todos.concat({name, id: Date.now(), completed: false})
  })
}

toggleCompletion= id => {
  this.setState({
    ...this.state,
    todos: this.state.todos.map(td=> {
      if(id == td.id) return { ...td, completed: !td.completed}
      return td
    })
  })


}


  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList todos={this.state.todos} toggleCompletion= {this.toggleCompletion}/>
        <Form addTodo={this.addTodo} onSubmit={this.onSubmit} onChange={this.onChange}/>
      </div>
    )
  }
}
