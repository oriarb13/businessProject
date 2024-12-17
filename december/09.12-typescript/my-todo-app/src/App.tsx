import { useState } from 'react';
import { Todo } from './types';

const App = ()=>{
    const [todos,setTodos]= useState<Todo[]>([])
    const [newTodoText, setNewTodoText] = useState<string>("");
    const [filter,setFilter] = useState<string>("")

    const addTodo = () => {
        if (newTodoText === "") return; 
        const newTodo: Todo = {
          id: Math.random().toString(36).substring(2),//unique id
          text: newTodoText,
          completed: false,
        };
        setTodos([...todos, newTodo]);
        setNewTodoText(""); 
      };

    const deleteTodo = (id: string) =>{ 
        setTodos(todos.filter((todo)=>todo.id!==id))
    }

    const filteredTodos = () => {
        if (filter === "active") {
            return todos.filter((todo) => !todo.completed);
        } else if (filter === "completed") {
            return todos.filter((todo) => todo.completed);
        }
        return todos;
      };    
    const toggleTodo = (id:string) => {
        setTodos(todos.map((todo)=> todo.id===id?{
            ...todo, completed: !todo.completed} : todo
        ))
    }

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
      };

    return(
        <div>
{/* clear completed */}
            <button onClick={clearCompleted}>clear completed todos</button>
{/* add todo input */}
            <input 
            type='text'
            value={newTodoText}
            onChange={(e)=>setNewTodoText(e.target.value)}
            />
            <button onClick={addTodo}>add todo</button>
{/* select */}
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                <option value="">all todos</option>
                <option value="active">active todos</option>
                <option value="completed">completed todos</option>
            </select>
{/* list */}
            <ul>
                {filteredTodos().map((todo)=>(
                    <li key={todo.id}>
                        <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={()=> deleteTodo(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App;
