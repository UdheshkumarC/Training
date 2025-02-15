import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const App=() =>{
  const myName="UDHESHKUMAR C";
  const myAge=19;
  React.useEffect(()=>{
    alert("Hi Udheshkumar C");
    console.log('My age is ${myAge}');
   },[]);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{textAlign:"center",color:"cyan"}}>UDHESHKUMAR C</h1>
        
    </>
  )
}

export default App;
