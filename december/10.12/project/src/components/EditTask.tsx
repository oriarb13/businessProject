import { useState, useEffect } from "react";
import { TextField, Button, Grid, Card, CardContent, Select, MenuItem, InputLabel } from "@mui/material";
import { Task } from "../types";
import { useTasks } from "../TaskProvider";

interface EditTaskProps {
  task: Task;
  onClose: () => void; // Callback to close the edit form
}

const EditTask  = ({ task, onClose } :EditTaskProps) => {
  const { updateExistingTask } = useTasks(); // Access the update function from context
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateExistingTask({
        ...task,
        title,
        description,
        dueDate,
        priority,
        status,
      });
      onClose(); // Close the form after saving
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Task</h1>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <TextField
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item>
                <TextField
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid item>
                <TextField
                  label="Due Date"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as Task["priority"])}
                  fullWidth
                >
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </Grid>

              <Grid item>
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as Task["status"])}
                  fullWidth
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </Grid>

              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Save Changes
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={onClose}
                  fullWidth
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditTask;
