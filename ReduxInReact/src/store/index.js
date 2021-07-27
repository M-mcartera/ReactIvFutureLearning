import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, shown: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

const authInitialState = { authenticated: false};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state){
        state.authenticated = false;
    }
  },
});

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authAuctions = authSlice.actions;

export default store;
