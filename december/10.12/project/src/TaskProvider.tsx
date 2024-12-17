import React, { createContext, useContext, useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "./api";
import { Task } from "./types";

// יצירת ממשק עבור ניהול המשימות
//1 interface of the tasks and func
interface TaskContextType {
  tasks: Task[];
  addNewTask: (task: Task) => Promise<void>;
  updateExistingTask: (updatedTask: Task) => Promise<void>;
  deleteExistingTask: (id: string) => Promise<void>;
  refreshTasks: () => Promise<void>;
}

//2create context 
// יצירת Context עבור המשימות
export const TaskContext = createContext<TaskContextType | null>(null);

// 3 props
interface TaskProviderProps {
  children: React.ReactNode;
}

//4 the component
// קומפוננטת TaskProvider שמספקת את ה-context למשימות
export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // קריאה למשימות ברגע שהקומפוננטה נטענת
  useEffect(() => {
    refreshTasks();
  }, []);

  const refreshTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addNewTask = async (task: Task) => {
    try {
      await addTask(task);
      await refreshTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const updateExistingTask = async (updatedTask: Task) => {
    try {
      if (updatedTask.id) {
        await updateTask(updatedTask.id, updatedTask);
        await refreshTasks();
      } else {
        console.error("Task id is missing");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteExistingTask = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    //return value with the keys
    <TaskContext.Provider
      value={{
        tasks,
        addNewTask,
        updateExistingTask,
        deleteExistingTask,
        refreshTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};


//the hook that i made
// Hook שמאפשר גישה ל-context
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
