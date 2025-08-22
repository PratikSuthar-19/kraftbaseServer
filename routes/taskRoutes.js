import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  searchTasks
} from "../controllers/taskController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(verifyToken);
router.get("/search", searchTasks);
router.post("/", createTask);         
router.get("/", getTasks);           
router.get("/:id", getTaskById);     
router.put("/:id", updateTask);      
router.delete("/:id" , deleteTask)


export default router;
