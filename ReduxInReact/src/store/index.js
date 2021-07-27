import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = { counter: 0, shown: false };

const counterSlice = createSlice({
  name: "counter",
  initState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseByValue(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.shown = !state.shown;
    },
  },
});
// const counterReducer = (state = initState, action) => {
//   if (action.type === "INCREMENT") {
//     return { counter: state.counter + 1, shown: state.shown };
//   }
//   if (action.type === "DECREMENT") {
//     return { counter: state.counter - 1, shown: state.shown };
//   }
//   if (action.type === "INCREMENT_BY_VALUE") {
//     return {
//       counter: state.counter + action.value,
//       shown: state.shown,
//     };
//   }
//   if (action.type === "TOGGLE") {
//     return {
//       counter: state.counter,
//       shown: !state.shown,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;

