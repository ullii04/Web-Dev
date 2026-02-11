const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

const createTodoItem = (taskText) => {
  const listItem = document.createElement('li');

  const leftContainer = document.createElement('div');
  leftContainer.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskSpan = document.createElement('span');
  taskSpan.className = 'task-text';
  taskSpan.textContent = taskText;

  checkbox.addEventListener('change', () => {
    taskSpan.classList.toggle('completed', checkbox.checked);
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.innerHTML = '🗑';

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  leftContainer.appendChild(checkbox);
  leftContainer.appendChild(taskSpan);

  listItem.appendChild(leftContainer);
  listItem.appendChild(deleteButton);

  return listItem;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === '') {
    return;
  }

  const todoItem = createTodoItem(taskText);
  todoList.appendChild(todoItem);

  taskInput.value = '';
  taskInput.focus();
});