import React, { useState } from 'react'
import './Square.css';
function Square({handleSquareClick}) {
  console.log(handleSquareClick);
  const[color,setColor] = useState('white');
  const handleclick = () =>{
    setColor('green');
    handleSquareClick();
     return;  
  }
     return (
     <div className='block' onClick={handleclick} style={{backgroundColor:color}}>
     </div>
  )
}

export default Square