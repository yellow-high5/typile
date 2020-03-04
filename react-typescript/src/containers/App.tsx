import React from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Typescript ♡ React</p>
        <ul>
          <li>
            <a className="App-link" href="https://reactjs.org">
              TODO
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default App;
