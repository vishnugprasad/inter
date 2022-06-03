import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  function stop() {
    clearInterval(clock);
  }

  function reset() {
    setTimer(0);
  }
  var clock;

  useEffect(() => {
    clock = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(clock);
  });
  return (
    <div className="App">
      <h1> TIMER:{timer} </h1>
      <button onClick={stop}> stop</button>
      <button onClick={reset}> reset</button>
    </div>
  );
}

export default App;
