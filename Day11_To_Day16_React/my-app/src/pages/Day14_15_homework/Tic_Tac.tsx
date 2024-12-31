import React, { MouseEventHandler, useState } from "react";
import "../../styles/hw.css";

function TicTac() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [XIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (XIsNext ? "X" : "O");
  }

  function handleClick(i: number) {
    //check whether clicked and get value, then check winner whether is null
    if (calculateWinner(square) || square[i]) {
      return;
    }

    const nextSquare = square.slice(); //copy and create a new array

    if (XIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setSquare(nextSquare);
    setXIsNext(!XIsNext);
  }

  const restartHandler = () => {
    console.log("clicked");
    const newSquare = Array(9).fill(null);
    setSquare(newSquare);
    setXIsNext(true);
    status = "Next player: " + (XIsNext ? "X" : "O");
  };

  return (
    <div className="contentBox">
      <div>
        <div className="board-row">
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={square[3]} onSquareClick={() => handleClick(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={square[6]} onSquareClick={() => handleClick(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>

      <div>
        <h2>{status}</h2>
        <div>
          <button
            onClick={restartHandler}
            style={{
              cursor: "pointer",
              backgroundColor: "#4994ec",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}

interface propsType {
  onSquareClick: MouseEventHandler;
  value: string | null;
}

//child component
const Square = (props: propsType) => {
  const { value, onSquareClick } = props;
  return (
    <div>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </div>
  );
};

// calculate winner
function calculateWinner(squares: any[]) {
  const lineWinnerIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lineWinnerIndex.length; i++) {
    const [a, b, c] = lineWinnerIndex[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTac;
