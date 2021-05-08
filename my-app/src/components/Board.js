import Square from './Square';
import '../index.css';

export default function Board(props) {
  const winnerKeys = props.winnerTiles?.map(([y, x]) => '' + y + x);
  const squareComponents = props.squares.map((row, y) => {
    const squareRowComponents = row.map((item, x) => {
      const key = '' + y + x;
      const isWinnerTile = winnerKeys?.includes(key);
      return (
        <Square
          value={item}
          isWinnerTile={isWinnerTile}
          onClick={() => props.onClick(x, y)}
          key={key}
        />
      );
    });
    return (
      <div className="board-row" key={y}>
        {squareRowComponents}
      </div>
    );
  });
  return (
    <div>
      {squareComponents}
    </div>
  );
}
