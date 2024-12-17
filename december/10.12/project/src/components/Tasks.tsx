import { useTasks } from "../TaskProvider";
import { useState } from "react";
import OneTask from "./OneTask";
import { Typography } from "@mui/material";
import AddTask from "./Add";
import Filter from "./Filter";


const TaskList = () => {
  const { tasks } = useTasks();//import task global 

  const [filter, setFilter] = useState<string>("");

  const filteredTasks = tasks.filter((task) => {
    if (!filter) return true; 
    return task.status === filter; 
  });

  return (
    <div>
            <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
      >
        task project
      </Typography>

      <AddTask/>

      <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: "bold", marginBottom: "8px", textAlign: "center" }}
      >
        All Tasks
      </Typography>
      <Filter currentFilter={filter} onChangeFilter={setFilter} />
      <ul style={{ listStyle: "none", padding: 0 }}>
      {filteredTasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "16px" }}>
            <OneTask task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
