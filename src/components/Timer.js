import "./timer.css";
import { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setSecond(second + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  });

  // Implemented start button
  const handleStart = () => {
    setIsRunning(true);
  };
  // Implemented Stop button
  const handleStop = () => {
    const stopedSecond = second;
    setIsRunning(false);
    setSecond(stopedSecond);
  };
  // Implemented Reset button
  const handleReset = () => {
    setIsRunning(false);
    setSecond(0);
  };

  return (
    <div className="container">
      <div className="second">{second}</div>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
