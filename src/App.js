import React, { useState, useEffect } from 'react';
// import logo from './logo.svg'
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const [monsters, setMonsters] = useState([]);
  return (
    <div className="App">
      {monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
}

export default App;
