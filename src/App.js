import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Nav from './views/Nav.js';
import User from './views/User';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import { ClassCountDown, HookCountDown } from './views/Countdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Todo from './views/Todo';



function App() {
  //State
  let [name, setName] = useState('Andrew Nguyen');
  let [address, setAddress] = useState('');
  let [todos, setTodo] = useState([
    { id: 1, title: "Learn React", type: "Andrew Nguyen" },
    { id: 2, title: "Play games", type: "HA" },
    { id: 3, title: "Do homework", type: 'Andrew Nguyen' },
    { id: 4, title: "Chillin' with music", type: 'HA' }
  ]);

  const eventHandleClick = (event) => {
    if (!address) {
      alert('Empty input!');
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 100000 + 1), title: address, type: 'Andrew Nguyen' };
    setTodo([...todos, newTodo]);
    setAddress('');
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      eventHandleClick(event);
    }
    return;
  }

  const deleteDataTodo = (id) => {
    let currentArr = todos;
    currentArr = currentArr.filter((item) => item.id !== id);
    setTodo(currentArr);
  }


  const alertOnTime = () => {
    alert('Time out!');
  }

  //re-render
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <p>
                List of the users in the {name}'s system
              </p>
              <User />
            </Route>
            <Route path="/timer">
              <ClassCountDown alertOnTime={alertOnTime} />
              <span>-----------------------</span>
              <HookCountDown alertOnTime={alertOnTime} />
            </Route>
            <Route path="/todo">
              <Todo
                todos={todos}
                title="All Todos"
                deleteDataTodo={deleteDataTodo}
              />
              <input type="text" value={address} onKeyDown={(event) => handleKeyPress(event)} onChange={(event) => { handleOnChangeInput(event) }} />
              <button type="button" onClick={(event) => eventHandleClick(event)}>Click me!</button>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/add-new-blog">
              <AddNewBlog />
            </Route>
            <Route>

            </Route>
          </Switch>

        </header>
      </div>
    </Router>
  );
}

export default App;
