import {
  addTask, deleteTask, editTask, updateCompletedStatus, clearCompleted,
} from '../_mocks_/tasks.js';

describe('addtask function', () => {
  test('when the user add a task it should be not empty on newItem', () => {
    const newItem = addTask(
      {
        task: 'Add the description for test',
        id: 1,
        status: false,
      },
    );
    expect(newItem).not.toBe([]);
  });

  test('when the user add a task it should be not empty on newItem', () => {
    const newItem = addTask(
      {
        task: 'Test Task 2',
        id: 2,
        status: false,
      },
    );
    expect(newItem).not.toBe([]);
  });
});

describe('deleteTask function', () => {
  test('when the the user deletes task the task should not be avialibale', () => {
    expect(deleteTask({
      task: 'Delete the description for test',
      id: 1,
      status: false,
    })).not.toStrictEqual([]);
  });

  test('when the the user deletes task the task should not be avialibale', () => {
    expect(deleteTask({
      task: 'Delete Task 2',
      id: 1,
      status: false,
    })).toStrictEqual([]);
  });
});

describe('editTask function', () => {
  test('when the user edits a task it should have the updated values', () => {
    const taskId = 1;
    const updatedTask = {
      task: 'Updated Task Description',
      id: taskId,
      status: true,
    };
    const updatedItem = editTask(taskId, updatedTask);
    expect(updatedItem).toEqual(updatedTask);
  });
});

describe('updateCompletedStatus function', () => {
  test('when the user updates the completed status of a task, it should have the updated value', () => {
    const taskId = 1;
    const updatedStatus = true;
    const updatedItem = updateCompletedStatus(taskId, updatedStatus);
    expect(updatedItem.status).toEqual(updatedStatus);
  });
});

describe('clearCompleted function', () => {
  test('when the user clears completed tasks, it should return a list of uncompleted tasks', () => {
    const taskList = [
      { task: 'Task 1', id: 1, status: false },
      { task: 'Task 2', id: 2, status: true },
      { task: 'Task 3', id: 3, status: false },
      { task: 'Task 4', id: 4, status: true },
      { task: 'Task 5', id: 5, status: false },
    ];
    const uncompletedTasks = clearCompleted(taskList);
    const completedTasks = uncompletedTasks.filter((task) => task.status === true);
    expect(completedTasks.length).toEqual(0);
  });
});