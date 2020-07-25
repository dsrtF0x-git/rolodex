import React, { useState, useEffect } from 'react';
// import logo from './logo.svg'
import './App.css';
import CardList from './components/card-list/CardList';

function App() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const [monsters, setMonsters] = useState([]);

  // const filteredMonsters =

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
