import { createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer.js";

export const store = createStore(CounterReducer)