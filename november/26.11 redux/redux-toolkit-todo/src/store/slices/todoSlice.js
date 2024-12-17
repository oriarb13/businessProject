//הגדרת הסלייס עצמו

import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",  
  initialState: {  //סטייט התחלתי
    todos: [],  
    // filters: {     // לדוגמה, פילטרים לצורך חיפוש ומיון
      // completed: false,
      // searchQuery: ""
    // }
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,//הפאי לואוד הוא הערך שמוזן בפונקציה כשמפעילים אותה
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // setSearchQuery: (state, action) => {
    //   state.filters.searchQuery = action.payload;
    // },
    // setCompletedFilter: (state, action) => {
    //   state.filters.completed = action.payload;
    // },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
