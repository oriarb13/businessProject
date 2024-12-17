import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../store/actions/TodosActions.js";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();  //take the reduce and 
  const todos = useSelector((state) => state.todos); // Access the todos from Redux store

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));  ///action on the reduce
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