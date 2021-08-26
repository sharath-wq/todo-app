import React from 'react'
import TodoData from './components/TodoData'
import TodoItem from './components/TodoItem'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      Todo : TodoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (id) {
    this.setState((prevState) => {
      const updatedState = prevState.Todo.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed : !item.completed
          }
        }
        return item
      })
      return {
        Todo : updatedState
      }
    })
  }

  render() {
    const TodoComponents = this.state.Todo.map((item) => <TodoItem handleChange = {this.handleChange} item = {item} key = {item.id} />)
    return (
      <div className = "todo-list">
        {TodoComponents}
      </div>
    )
  }
}

export default App