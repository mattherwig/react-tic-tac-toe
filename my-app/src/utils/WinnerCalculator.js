function calculateWinner(squares) {
  for (let y = 0; y < 3; y++) {
    const isRowWin =
      squares[y][0] &&
      squares[y][0] === squares[y][1] &&
      squares[y][0] === squares[y][2];
    if (isRowWin) return [[y, 0], [y, 1], [y, 2]];
  }

  for (let x = 0; x < 3; x++) {
    const isColumnWin =
      squares[0][x] &&
      squares[0][x] === squares[1][x] &&
      squares[0][x] === squares[2][x];
    if (isColumnWin) return [[0, x], [1, x], [2, x]];
  }

  const isDiagnolOneWin =
    squares[0][0] &&
    squares[0][0] === squares[1][1] &&
    squares[0][0] === squares[2][2];
  if (isDiagnolOneWin) return [[0, 0], [1, 1], [2, 2]];

  const isDiagnolTwoWin =
    squares[0][2] &&
    squares[0][2] === squares[1][1] &&
    squares[0][2] === squares[2][0];
  if (isDiagnolTwoWin) return [[0, 2], [1, 1], [2, 0]];  

  return null;
}

export { calculateWinner };