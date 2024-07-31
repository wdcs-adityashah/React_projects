import React from 'react';
import './Square.css';

function Square({ color, handleSquareClick }) {
  const handleClick = () => {
    handleSquareClick(); 
  };

  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    />
  );
}

export default Square;
