import React from "react";
import "./Card.css";

function Card({ monster }) {
  console.log(monster);
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=200x300`}
        alt="monster"
      />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
}

export default Card;
