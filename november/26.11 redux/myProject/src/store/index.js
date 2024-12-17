import { createStore } from "redux";
import todosReducer from "./reducers/ToDoReducer.js";

export const store1 = createStore(todosReducer)