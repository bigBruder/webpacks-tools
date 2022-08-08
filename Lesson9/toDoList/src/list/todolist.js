import { onToggleTask, onDeleteTask } from './updateTask';
import { onCreateTask } from './createTask';

export const initTodoListHandlers = () => {
  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', onCreateTask);

  const onListClick = (e) => {
    onDeleteTask(e);
    onToggleTask(e);
  };

  const todoListElem = document.querySelector('.list');

  todoListElem.addEventListener('click', onListClick);
};
