import { TaskProvider } from "./TaskProvider";
import TaskList from "./components/Tasks";

function App() {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
}
export default App;
