import './App.css'

import { Provider } from 'react-redux'
import { store } from './store/index.js'
import TodoList from './components/TodoList.jsx'
function App() {
  return (
    <>
    {/* שימוש בפרוביידר שנוצר על ידי הסטור  והקישוק שלו לסטור */}
    <Provider store={store}>  
      <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>redux to-do list</h1>
        <TodoList/>
      </div>
    </Provider>

    </>
  )
}

export default App
