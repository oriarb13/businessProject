import { Button } from "@mui/material";
import { useTasks } from "../TaskProvider"; 
import { Task } from "../types";

//the props that we get type
interface DeleteTaskProps {
  task: Task;
}

const DeleteTask = ({ task }: DeleteTaskProps) => {
  const { deleteExistingTask } = useTasks();//get delete func from the global

  const handleDelete = async () => {
    try {
      if (task.id) {
        await deleteExistingTask(task.id); 
        console.log(`Task with ID ${task.id} deleted.`);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Button
      variant="outlined"
      color="error"
      onClick={handleDelete} 
      sx={{ marginTop: "8px" }}
    >
      Delete Task
    </Button>
  );
};

export default DeleteTask;
