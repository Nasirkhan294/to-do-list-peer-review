let todos = [];

const addTask = (item) => {
  todos.push(item);
  return todos;
};

const deleteTask = (item) => {
  const newTodos = todos.filter((todo) => todo.id !== item.id);
  newTodos.forEach((todo, id) => { todo.id = id + 1; });
  return newTodos;
};

function editTask(taskId, updatedTask) {
  // find the task with the specified ID in the tasks array
  const taskIndex = todos.findIndex((todo) => todo.id === taskId);

  // if the task is found, update its properties with the new values
  if (taskIndex !== -1) {
    todos[taskIndex] = {
      ...todos[taskIndex],
      ...updatedTask,
    };

    return todos[taskIndex];
  }

  // if the task is not found, return null
  return null;
}

const updateCompletedStatus = (itemId, status) => {
  const taskIndex = todos.findIndex((todo) => todo.id === itemId);

  if (taskIndex !== -1) {
    todos[taskIndex].completed = status;
    return todos[taskIndex];
  }

  return null;
};

const clearCompleted = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  newTodos.forEach((todo, id) => { todo.id = id + 1; });
  todos = newTodos;
  return todos;
};

module.exports = {
  addTask, deleteTask, editTask, updateCompletedStatus, clearCompleted,
};
