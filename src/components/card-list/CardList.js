import React from 'react';
import './CardList.css';

function CardList(props) {
  console.log(props);
  return <div className="card-list">{props.children}</div>;
}

export default CardList;
