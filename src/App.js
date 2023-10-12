import React from 'react';
import './App.css';
import AgeCalculator from './component/AgeCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Age Calculator App</h1>
      </header>
      <main>
        <AgeCalculator />
      </main>
    </div>
  );
}

export default App;

