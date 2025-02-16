import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  alert("My name is UDHESHKUMAR C");
  function nanthan() {
    console.log("vanakam");
  }

  const summa =()=>{
  console.log("enna panringa inga");
  }
  const name={
    name:"UDHESHKUMAR C",
    age:18,
  };
  console.log("age="+name.age);
  return (
    
    <div className='screen'>
    <h1>name:{name.name}</h1>
    <button onClick={nanthan}>press me</button>
    <button onClick={()=>console.log("nalaiku college bro")}> click me </button>
    <button onClick={summa}> just touch </button>  
     </div> 
  );
}

export default App

