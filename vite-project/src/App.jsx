import React from 'react';
import './App.css'

import { useState } from 'react';


  const BackgroundChanger = () => {
    const [bgColor, setBgColor] = useState("#ffffff");
  
    const changeColor = (color) => {
      setBgColor(color);
    };
  

  
  return (
    
<div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
      <h2 >Change Background Color</h2>
      <button onClick={() => changeColor("black")}>Black</button>
      <button onClick={() => changeColor("white")}>Reset</button>
      
    </div>
 
  );
}

export default BackgroundChanger;