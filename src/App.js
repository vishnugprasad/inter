import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const[seconds, setSeconds] = useState(0)
  const[minutes, setMinutes] = useState(0) 
  const[start,setStart] = useState(false)

  var timer

  function reset(){
    setSeconds(0);
    setMinutes(0);
    setStart(false)
  }
  function startup(){
    setStart(true)
  }

  useEffect(()=>{
    if(start === true){ 
      timer =  setInterval(()=>{
        setSeconds(seconds+1)
        if(seconds === 59){
          setMinutes(minutes+1)
          setSeconds(0)
        }
      }, 1000)
    }

    return ()=>{clearInterval(timer)}

  })

  
  function stop(){
    
   clearInterval(timer)
    
  }
  
  return (
    <div className="App">
      <h1>TIMER</h1>
      <h1>{minutes<10 ? "0"+minutes: minutes} : {seconds<10 ? "0"+ seconds : seconds}</h1>
      <button onClick = {reset}>RESET</button>
      <button onClick = {stop}>STOP</button>
      <button onClick = {startup}>START</button>
    </div>
  );
} 

export default App;
