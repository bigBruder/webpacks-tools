import { onToggleTask } from "./updateTask.js";
import { onCreateTask } from "./createTask.js";

export const initTodoListHandlers = () => {
  const createBtn = document.querySelector(".create-task-btn");
  createBtn.addEventListener("click", onCreateTask);

  const todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onToggleTask);
};
