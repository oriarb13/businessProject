import './App.css'

import { Provider } from 'react-redux'
import { store } from './store/index.js'
import Counter from './components/Counter.jsx'
function App() {
  return (
    <>
    <Provider store={store}>
      <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>redux Counter</h1>
        <Counter/>
      </div>
    </Provider>

    </>
  )
}

export default App

