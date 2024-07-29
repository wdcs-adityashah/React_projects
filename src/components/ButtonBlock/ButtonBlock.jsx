import React, { useEffect, useState } from 'react';
import './ButtonBlock.css';
import Square from '../Square/Square';
function ButtonBlock() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(null);
  const [squares, setSquares] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(null); 
  const [clickedSquares, setClickedSquares] = useState(false);
  useEffect(()=>{
    if(clickedSquares === squares.length && squares.length>0){
      const endTime = new Date();
      console.log(endTime);
      const timeDiff = (endTime - 0) / 1000;
      console.log(timeDiff);
      setElapsedTime(timeDiff);
  }
  },[squares.length,clickedSquares])
  const handleSquareClick = () => {
    setClickedSquares((prev) => prev + 1);  
    };
    
  function valueSquare() {
    const numericValue = parseFloat(inputValue);
    setResult(numericValue * numericValue);
    if(numericValue<0){
      setSquares([]);
    }
    else{
      let output = [];
      for(let i = 0;i<result;i++){
         output.push(<Square key={i}  handleSquareClick={handleSquareClick}/>)
      }
      setSquares(output);
      setElapsedTime(null);  
      setClickedSquares(!clickedSquares);
      return output;
    }
    
  }
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
      <div className="timer">
      {elapsedTime !== null ? `Time Taken: ${elapsedTime} seconds` : 'Timer:0'}
      </div>
      <div className="square_container">
        {squares}
      </div>
    </>
  );
}

export default ButtonBlock;
