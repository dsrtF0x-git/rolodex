import React, { useState, useEffect } from "react";
// import logo from './logo.svg'
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  return (
    <div className="App">
      <SearchBox
        placeholder="Search monsters"
        handleChange={(e) => setSearchField(e.target.value)}
        searchField={searchField}
      />
      <CardList
        monsters={monsters.filter((monster) =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
        )}
      />
    </div>
  );
}

export default App;
