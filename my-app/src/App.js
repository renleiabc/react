import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
const element = (
  <div>
    <h1>Hello,reactd</h1>
  </div>
)
const todos = ["item1", "item2", "item3"];
class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to react</h1>
          {element}
        </header>
        {todos.map(message => <li>{message}</li>)}
      </div>
  }
}

export default App
