//Ben Griffith
//model part of MVC structure

//var expect = require('chai')
//I can list my tasks

(function (window) { //IIFE: immediately invoked function expression
  'use strict';
  var list = [ ];

  var taskList = [ ];
  //function definition:
  function listTasks(){
    console.log(taskList)
  }

  //function invocation:

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

  window.todos = {
    "addTaskToList": addTaskToList,
    "completeTask": completeTask,
    "deleteTask": deleteTask,
    "listTasks": listTask
  };

})(window);

window.addTaskToList = addTaskToList;



//function prioritizeTask(oldIndex, newIndex, taskList)

/*
expect(taskList.length).to.Equal(0);
addTask("remember the milk", taskList);
expect(taskList[0]).to.equal("remember the milk");
expect(taskList.length).to.equal(1);
expect(taskList[0]).to.equal("remember the milk");
expect(taskList.length).to.equal(1);

expect(taskList.length).to.equal(1);
addTask("wash the dishes", taskList);
expect(taskList[1]).to.equal("wash the dishes");
expect(taskList.length).to.equal(2);

expect(taskList.length).to.equal(2);
addTask("take out the trash", taskList);
expect(taskList[2]).to.equal("take out the trash");
expect(taskList.length).to.equal(3);

expect(taskList.length).to.equal(3);
editTask(0,"remember the milk and beer");
expect(taskList[0]).to.equal("remember the milk and beer");
expect(taskList.length).to.equal(3);
expect(taskList[1]).to.equal("wash the dishes");
expect(taskList[2]).to.equal("take out the trash");

expect(taskList.length).to.equal(3);
deleteTask(1,taskList);
expect(taskList.length).to.equal(2);
expect(taskList[0]).to.equal("remember the milk and beer")
expect(taskList[1]).to.equal("wash the dishes");
expect(taskList[2]).to.equal(undefined);

expect(completeTask).to.exist;
expect(taskList.length).to.equal(2);
completeTask(1, taskList);
expect(taskList.length).to.equal(2);
expect(taskList[0]).to.equal("remember the milk and beer");
expect(taskList[1]).to.equal("[X] wash the dishes");

expect(prioritizeTask).to.exist;
expect(taskList.length).to.equal(2);
prioritizeTask(0, 1, taskList);
expect(taskList.length).to.equal(2)
expect(taskList[0].to.equal("[X] wash the dishes"));
expect(taskList[1].to.equal("remember the milk and beer"));
console.log(taskList);
*/
