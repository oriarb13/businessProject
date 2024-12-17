import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/slices/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
