import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList, deleteTask } from "./tasksGateway.js";

export const onToggleTask = (e) => {
  const isCheckBox = e.target.classList.contains("list-item__checkbox");

  if (!isCheckBox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const taskslist = getItem("tasksList");
  const { text, createDate } = taskslist.find((task) => task.id === taskId);

  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

export const onDeleteTask = (e) => {
  console.log(e.target.classList);

  const isDeleteBtnElem = e.target.classList.contains("list-item__delete-btn");
  if (!isDeleteBtnElem) {
    return;
  }

  // const deletedTask = {};

  const id = e.target.dataset.id;
  console.log(id);
  deleteTask(id)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Write data to dataBase
// 3. Read new data from the server
// 4. Save new data to fromt-end storage
// 5. Update UI based on a new data
