import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initState = { counter: 0, shown: false };

createSlice({
    name: "counter",
    initState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.value;
        },
        toggle(state){
            state.show = !state.show;
        }
    }
});
const counterReducer = (state = initState, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1, shown: state.shown };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1, shown: state.shown };
  }
  if (action.type === "INCREMENT_BY_VALUE") {
    return {
      counter: state.counter + action.value,
      shown: state.shown,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      shown: !state.shown,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
