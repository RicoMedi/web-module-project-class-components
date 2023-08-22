import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(){
    super(),
    this.state = {
    showAll: true
  }
  }
  
  
  toggleHide = event => {
    this.setState({
      ...this.setState, 
      showAll: !this.state.showAll
    })
  }
  render() {
    const  {todos, toggleCompletion} = this.props

    const filtered= todos.filter(td => !td.completed || this.state.showAll)


    return (
      <div>
        { 
        filtered.map(todo =>(<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />))
        }
       <button onClick={this.toggleHide}>{this.state.showAll ? 'Hide Completed' : 'Show All' }</button>
      </div>
    )
  }
}
