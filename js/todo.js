//Ben Griffith
//model part of MVC structure

//I can list my tasks
(function (window){
  var taskList = [ ];

  // I can list my tasks...
  function listTasks(){
        // TODO: make this do something....
      }

  // I can add a task to my list...
  function addTaskToList(task,list){
      // What is the task? @param task
      // Where is the task going? @param list
      // What order / priority? lowest, on the bottom
      return list.push(task);
      // add task to list somehow on the bottom
  }

  // window.addTaskToList = addTaskToList;

  //I can edit a task on my list...
  function editTask(position,newTaskName){
      // Which task is being edited? @param position
      // What is the edit? @param newTaskName
      // New task name should be displayed on task list
      return taskList[position] = newTaskName;
  }

  // I can delete a task on my list...
  function deleteTask(task,list){
      // Which task is being deleted? @param
      // Where is it being deleted from? @param
      // How does the rest of the list change after deleting?
      return list.splice(task, 1);
  }

  function completeTask(task, list){
      // Which task is being completed?
      // Where is the task being marked as completed?
      return list[task - 1] += " COMPLETE";
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

//window.todos = todos;
