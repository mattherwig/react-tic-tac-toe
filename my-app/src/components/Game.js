import React from "react";
import Board from "./Board";
import History from "./History";
import { calculateWinner } from "../utils/WinnerCalculator";
import "../index.css";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(3).fill(Array(3).fill(null)),
          lastMove: Array(2).fill(null),
        },
      ],
      stepNumber: 0
    };
  }

  getCurrentPlayer() { return this.state.stepNumber % 2 === 0 ? "X" : "O" }

  handleClick(x, y) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));
    if (calculateWinner(squares) || squares[y][x]) return;

    squares[y][x] = this.getCurrentPlayer();
    const lastMove = [x, y];
    this.setState({
      history: history.concat([{ squares, lastMove }]),
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({ stepNumber: step });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winnerTiles = calculateWinner(current.squares);

    const status = winnerTiles ? "Game Over" : `Next player: ${this.getCurrentPlayer()}`;
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerTiles={winnerTiles}
            onClick={(x, y) => this.handleClick(x, y)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div className="game-history">
            <History
              history={history}
              stepNumber={this.state.stepNumber}
              onHistoryItemClick={(move) => this.jumpTo(move)}
            />
          </div>
        </div>
      </div>
    );
  }
}
