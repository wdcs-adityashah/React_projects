import React, { useState } from 'react';
import './ButtonBlock.css';
import Square from '../Square/Square';

function ButtonBlock() {
  const [inputValue, setInputValue] = useState(0);
  const [squares, setSquares] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const [clickedSquares, setClickedSquares] = useState(false);
  const [error, setError] = useState(null);

  const alternateColor = (index) => index % 2 === 0 ? 'red' : 'green';
  const handleSquareClick = (index) => {
    if (squares[index] !== 'white') return; 
    const newSquares = [...squares];
    newSquares[index] = alternateColor(index);
    setSquares(newSquares);
    setClickedSquares(!clickedSquares);
    if (newSquares.every(square => square === 'red' || square === 'green')) {
      const endTime = new Date();
      const timeDiff = (endTime - startTime) / 1000;
      setElapsedTime(timeDiff);
    }
  };

  const valueSquare = () => {
    const numericValue = parseFloat(inputValue);
    const squareResult = numericValue * numericValue;
    if (numericValue < 0) {
      setSquares([]);
      setError('Negative numbers are not allowed');
    } else {
      let output = Array(squareResult).fill('white');
      setSquares(output);
      setStartTime(new Date());
      setClickedSquares(0);
      setElapsedTime(null);
      setError(null);
    }
  };

  return (
    <>
      <div className="btnfield">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={valueSquare}>Square the Value</button>
      </div>
      
      {inputValue < 0 && error}
      
      <div className="timer">
        {elapsedTime !== null ? `Time Taken: ${elapsedTime} seconds` : null}
      </div>
      
      <div className="square_container">
        {squares.map((color, index) => (
          <Square
            key={index}
            color={color}
            handleSquareClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export default ButtonBlock;
