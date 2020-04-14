import React from 'react';
import './App.css';
import SymptonChecklist from './components/SymptonChecklist/SymptonChecklist';

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

      <SymptonChecklist />
    </div>
  );
}

export default App;
