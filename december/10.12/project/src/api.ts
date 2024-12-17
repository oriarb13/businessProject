import axios from "axios";
import { Task } from "./types";

const API_URL = "http://localhost:3001/tasks";

//all tasks
export const getTasks = async (): Promise<Task[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  };

  //add 
  export const addTask = async (task: Task): Promise<Task> => {
    const response = await axios.post(API_URL, task);
    return response.data;
  };

  //update
  export const updateTask = async (id: string, updatedTask: Task): Promise<Task> => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
  };

  //delete
  export const deleteTask = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  };

