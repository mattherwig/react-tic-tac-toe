import React, { useState } from 'react';

export default function History(props) {
  const [ascending, setAscending] = useState(false);
  let moves = props.history.map(({ squares, lastMove }, move) => (
    <HistoryItem
      move={move}
      lastMove={lastMove}
      isActive={move === props.stepNumber}
      onClick={() => props.onHistoryItemClick(move)}
    />
  ));
  return (
    <div>
      <button onClick={() => setAscending(!ascending)}>Toggle</button>
      <ul>{ascending ? moves.reverse() : moves}</ul>
    </div>
  );
}

function HistoryItem(props) {
  const [x, y] = props.lastMove;
  const desc = props.move
    ? `Go to move #${props.move} (${x + 1}, ${y + 1})`
    : "Go to game start";
  return (
    <li className="history-item" key={props.move}>
      <button
        className={props.isActive ? "active" : ""}
        onClick={props.onClick}
      >
        {desc}
      </button>
    </li>
  );
}