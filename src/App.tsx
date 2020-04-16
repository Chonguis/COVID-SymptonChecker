import React from 'react';
import './App.css';
import SymptonChecker from './components/SymptonChecker/SymptonChecker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <SymptonChecker />
    </div>
  );
}

export default App;
