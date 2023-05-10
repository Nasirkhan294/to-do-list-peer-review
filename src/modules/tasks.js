export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(description) {
  const task = {
    description,
    completed: false,
    index: tasks.length,
  };
  tasks.push(task);
  saveTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  saveTasks();
}

export function editTask(index, newDescription) {
  if (tasks[index]) {
    tasks[index].description = newDescription;
    saveTasks();
  }
}

module.exports = {saveTasks, addTask, deleteTask};