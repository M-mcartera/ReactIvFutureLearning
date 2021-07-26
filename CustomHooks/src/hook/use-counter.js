import { useState, useEffect } from "react";

const useCounter = (action = true) => {
  const [counter, setCounter] = useState(0);
  //true  este adunarea  false este scaderea
  useEffect(() => {
    const interval = setInterval(() => {
      action
        ? setCounter((prevCounter) => prevCounter + 1)
        : setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [action]);

  return counter;
};

export default useCounter;
