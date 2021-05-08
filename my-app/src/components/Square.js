import React from 'react';
import '../index.css';

export default function Square(props) {
  return (
    <button 
      className={"square " + (props.isWinnerTile ? "winner" : "")}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
