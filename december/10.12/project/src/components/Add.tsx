import { useState } from "react";
import { TextField, Button, Grid, MenuItem, Box } from "@mui/material";
import { useTasks } from "../TaskProvider";
import { Task } from "../types"; // סוג המשימה

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [dueDate, setDueDate] = useState("");
  const { addNewTask } = useTasks(); // שימוש בפונקציה מתוך ה-context

  const handleAddTask = async () => {
    if (!title || !description || !dueDate) {
      alert("Please fill in all fields.");
      return;
    }

    const newTask: Task = {
      id: Math.random().toString(36).substring(2), // יצירת מזהה ייחודי
      title,
      description,
      priority,
      dueDate,
      status: "Pending", // ברירת מחדל
    };

    try {
      await addNewTask(newTask); // הוספת משימה חדשה דרך ה-context
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setDueDate("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "16px auto",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
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
              required
            />
          </Grid>

          <Grid item>
            <TextField
              label="Priority"
              select
              value={priority}
              onChange={(e) => setPriority(e.target.value as "High" | "Medium" | "Low")}
              fullWidth
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </TextField>
          </Grid>

          <Grid item>
            <TextField
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>

          <Grid item>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleAddTask}
              fullWidth
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddTask;
