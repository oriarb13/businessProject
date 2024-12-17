import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../store/slices/todoSlice.js';

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();  //מה שמשנה את הסטייט נותן גישה להפעלת פונקצייות השינוי
  const todos = useSelector((state) => state.todo.todos ); //  קישור לסטור שממנו נקח את הסטייט
//ניגש לסטייט בתוכו לשם טודו בתוכו למערך טודוס
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));  ///דיספאצ משנה את הסטייט הגלובלי באמצעות פונקציית השינו שמקבלת את הערך המוזן
      setNewTodo(""); // Clear the input after adding
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}              
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                backgroundColor: todo.completed ? "yellow" : "blue",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;