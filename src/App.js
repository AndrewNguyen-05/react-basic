import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';

function App() {
  let name = "Andrew Nguyen";
  let obj = {name:"Eric", year:"2023"};
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js and {name} {JSON.stringify(obj)};
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
