import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const stateCounter = useSelector((state) => state.counter);
  const isShown = useSelector((state) => state.shown);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decremenetHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const incrementByFiveHandler = () => {
    dispatch({ type: "INCREMENT_BY_VALUE", value: 5 });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{stateCounter}</div>}
      <div>
        <button onClick={decremenetHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
