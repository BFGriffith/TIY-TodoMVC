//Ben Griffith
//model part of MVC structure

//var expect = require('chai')
//I can list my tasks

(function (window){ //IIFE: immediately invoked function expression
  'use strict';

  var taskList = [ ];
  //function definition:
  function listTasks(){

  }


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
  window.todos = {
    "tasklist": taskList,
    "addTask": taskList,
    "completeTask": completeTask,
    "deleteTask": deleteTask,
    "listTasks": listTask
  };
})(window);
window.todos = todos;
