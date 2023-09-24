import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react';


function App() {
  //State
  let [name, setName] = useState('Andrew Nguyen');
  let [address, setAddress] = useState('');
  let [todos, setTodo] = useState([
    { id: '1', title: "Learn React" },
    { id: '2', title: "Play games" },
    { id: '3', title: "Do homework" }
  ]);

  const eventHandleClick = (event) => {
    if (!address) {
      alert('Empty input!');
      return;
    }
    let newTodo = { id: "abc", title: address };
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
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js and {name}
        </p>
        <div className="todo-container">
          {todos.map((todo) => {
            console.log(">>>>>check todo", todo.title);
            return (
              <li className="todo-child" key={todo.id}>{todo.title}</li>
            )
          })}
        </div>
        <input type="text" value={address} onKeyDown={(event) => handleKeyPress(event)} onChange={(event) => { handleOnChangeInput(event) }} />
        <button type="button" onClick={(event) => eventHandleClick(event)}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
