import { onToggleTask } from "./updateTask.js";
import { onCreateTask } from "./createTask.js";
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtn = document.querySelector(".create-task-btn");
  createBtn.addEventListener("click", onCreateTask);
  var todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onToggleTask);
};