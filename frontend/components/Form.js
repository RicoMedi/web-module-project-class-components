import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super(),
    this.state= {
    name: "", 
  }
  }
 
  onSubmit= event => {
    event.preventDefault()
    this.props.addTodo(this.state.name)
    this.setState({
      ...this.state, 
      name: ''
    })
  }
  onChange = event => {
    this.setState({...this.state, name: event.target.value})
  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>

        <input type="text" value={this.state.name} onChange={this.onChange}/>
        <input type='submit'/>
      
      </form>

    )
  }
}
