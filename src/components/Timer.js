import { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    let timerId = setInterval(() => {
      setSecond(second + 1);
    }, 1000);

    return () => clearInterval(timerId);
  });

  return <div>{second}</div>;
};

export default Timer;
