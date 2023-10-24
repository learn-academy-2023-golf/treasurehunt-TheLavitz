import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setbombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [counter, setCounter] = useState(5);

  console.log("treasure:", treasureLocation);
  console.log("bomb:", bombLocation);

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board];
    if (treasureLocation === index) {
      updatedBoard[index] = "💎";
      setBoard(updatedBoard);
      setTimeout(() => {
        alert("You win!");
      }, 1);
      setTimeout(() => {
        handleRestart();
      }, 1);
    } else if (bombLocation === index) {
      updatedBoard[index] = "💥";
      setBoard(updatedBoard);
      setTimeout(() => {
        alert("You lose!");
      }, 1);
      setTimeout(() => {
        handleRestart();
      }, 1);
    } else {
        updatedBoard[index] = "🌴";
        setBoard(updatedBoard);
        setCounter(counter - 1);
    }
  };

  const handleCounter = () => {
    if(counter === 1) {
      setTimeout(() => {
        alert("You ran out of turns.");
      }, 1);
      setTimeout(() => {
        handleRestart();
      }, 1);
    }
  }

  const handleRestart = () => {
    let defaultBoard = ["?", "?", "?", "?", "?", "?", "?", "?", "?"];
    setBoard(defaultBoard);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setbombLocation(Math.floor(Math.random() * board.length));
    setCounter(5);
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
              handleCounter={handleCounter}
            />
          );
        })}
        <button onClick={handleRestart}>Play Again</button>
        <p>Tries Remaing: {counter}</p>
      </div>
    </>
  );
};

export default App;
