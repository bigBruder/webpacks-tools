import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";

export const onToggleTask = (e) => {
  const isCheckBox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckBox) {
    return;
  }
  const taskslist = getItem("tasksList");
  const newTasksList = taskslist.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem("tasksList", newTasksList);
  renderTasks();
};
