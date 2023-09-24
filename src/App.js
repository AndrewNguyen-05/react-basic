import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Nav from './views/Nav.js';
import Todo from './views/Todo';



function App() {
  //State
  let [name, setName] = useState('Andrew Nguyen');
  let [address, setAddress] = useState('');
  let [todos, setTodo] = useState([
    { id: '1', title: "Learn React", type: "Andrew Nguyen" },
    { id: '2', title: "Play games", type: "HA" },
    { id: '3', title: "Do homework", type: 'Andrew Nguyen' },
    { id: '4', title: "Chillin' with music", type: 'HA' }
  ]);

  const eventHandleClick = (event) => {
    if (!address) {
      alert('Empty input!');
      return;
    }
    let newTodo = { id: 'abc', title: address, type: 'Andrew Nguyen' };
    setTodo([...todos, newTodo]);
    setAddress('');
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  }

  const handleKeyPress = (event) => {
    if(event.keyCode === 13){
      eventHandleClick(event);
    }
    return;
  }

  //re-render
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js and {name}
        </p>
        <Todo 
          todos = {todos}
          title = "All Todos"
        />

        <Todo
          todos = {todos.filter((item) => item.type == "Andrew Nguyen")}
          title = "Andrew's Todos"
        />
        <input type="text" value={address} onKeyDown={(event) => handleKeyPress(event)} onChange={(event) => { handleOnChangeInput(event) }} />
        <button type="button" onClick={(event) => eventHandleClick(event)}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
