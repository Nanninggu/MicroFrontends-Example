import React from 'react';
import './App.css';

function App() {
  const React_Info = {
    Port_number: '3000',
    Address: 'localhost',
    Run_URL: 'http://localhost:3000'
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Micro Frontend - React</h1>
        <p>Name: {React_Info.Port_number}</p>
        <p>Head: {React_Info.Address}</p>
        <p>Head: {React_Info.Run_URL}</p>
      </header>
    </div>
  );
}

export default App;