import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";
const Counter = () => {
  const dispatch = useDispatch();
  const stateCounter = useSelector((state) => state.counter.counter);
  const isShown = useSelector((state) => state.counter.shown);

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };
  const decremenetHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };
  const incrementByFiveHandler = () => {
    // dispatch({ type: "INCREMENT_BY_VALUE", value: 5 });
    dispatch(counterActions.increaseByValue(5));
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });
    dispatch(counterActions.toggle());
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
