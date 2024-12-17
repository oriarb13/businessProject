// import { addTodo,deleteTodo } from "../actions/TodosActions.js";

const initialState = {
    todos:[
        // { "id": 1, "text": "לבדוק אימיילים", "complete": false },
        // { "id": 2, "text": "לשלוח חשבונית ללקוח", "complete": true },
        // { "id": 3, "text": "להכין מצגת לפגישה", "complete": false },
        // { "id": 4, "text": "לסיים את דוח הפרויקט", "complete": true },
        // { "id": 5, "text": "להזמין כרטיסי טיסה", "complete": false },
        // { "id": 6, "text": "להתקשר לספקים", "complete": false },
        // { "id": 7, "text": "לסיים תיקוני קוד", "complete": true },
        // { "id": 8, "text": "לארגן פגישה עם צוות", "complete": false }
      ]
}

const todosReducer =(state=initialState , action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: Date.now(), text:action.payload , completed:false}
                ]
            }
            case "DELETE_TODO":
                return {
                    ...state,
                    todos: state.todos.filter((todo)=> { return todo.id!==action.payload})
                }
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

            default : 
                return state
            
    }
}

export default todosReducer