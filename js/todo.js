//Ben Griffith
//model part of MVC structure

//I can list my tasks
(function(window) {
  var taskList = [];
  // I can list my tasks...
  function listTasks(list) {
    // TODO: make this do something...
  }

  //I can add a task to my list...
  function addTaskToList(task, list) {
    return list.push(task);
  }

  //I can check a task off my list...
  function completeTask(task, list) {
    return list[task - 1] += ' COMPLETE';
  }

  //I can delete a task off my list...
  function deleteTask(task, list) {
    return list.splice(task - 1, 1);
  }

  window.todos = {
    "taskList": taskList,
    "addTaskToList": addTaskToList,
    "completeTask": completeTask,
    "deleteTask": deleteTask

  };

})(window);

//function invocation:
/*
  //I can add a task to my list?
  function addTask(task, tasklist){
    //What is the task?
    //Where is the task going?
    //What order? Priority? lowest, on bottom: use push?
    return taskList.push(task)
  }

  function editTask(position,newTaskName){
      // Which task is being edited?
      // What is the edit?
      // New task name should be displayed on task list
      return taskList[position] = newTaskName;
  }

  //I can delete a task off my list?
  function deleteTask(task, taskList){
    return list.splice(task - 1, 1);
  }
*/
