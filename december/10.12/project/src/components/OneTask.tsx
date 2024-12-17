import { useState } from "react";
import { Card, CardContent, Typography, Chip, Box, Button, Modal } from "@mui/material";
import { Task } from "../types";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

interface OneTaskProps {
  task: Task;
}

const OneTask = ({ task }: OneTaskProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      default:
        return "green";
    }
  };

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "In Progress":
        return "orange";
      case "Completed":
        return "green";
      default:
        return "red";
    }
  };

  const handleEditClose = () => {
    setIsEditModalOpen(false); 
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          margin: "16px auto",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", marginBottom: "8px" }}
          >
            {task.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: "16px" }}
          >
            {task.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Chip
              label={`Priority: ${task.priority}`}
              sx={{
                borderColor: getPriorityColor(task.priority),
                color: getPriorityColor(task.priority),
              }}
              variant="outlined"
            />
            <Chip
              label={`Status: ${task.status}`}
              sx={{
                borderColor: getStatusColor(task.status),
                color: getStatusColor(task.status),
              }}
              variant="outlined"
            />
          </Box>

          <Typography variant="body2" color="text.secondary">
            Due Date: {new Date(task.dueDate).toLocaleDateString()}
          </Typography>

          <Box sx={{ marginTop: "16px", display: "flex", gap: "8px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditModalOpen(true)}
            >
              Edit Task
            </Button>
            <DeleteTask task={task} />
          </Box>
        </CardContent>
      </Card>

      {/* Modal for editing task */}
      <Modal
        open={isEditModalOpen}
        onClose={handleEditClose}
        aria-labelledby="edit-task-modal"
        aria-describedby="edit-task-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "20%",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            p: 4,
          }}
        >
          <EditTask task={task} onClose={handleEditClose} />
        </Box>
      </Modal>
    </>
  );
};

export default OneTask;
