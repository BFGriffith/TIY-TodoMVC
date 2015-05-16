//controller part of MVC structure

//I can add a task...
//1. What event should I be listening for?
//2. What element makes sense to
//3. What do I need to do when that event fires?

//1. click on "what needs to be done?" (input class="newtodo")
//2. type the thing you want to remember (task) ()
//3. press the "Enter" key (input.newtodo)
//4. ROBOT: task should be added to dictionary array representng tasklist in controller
//5. ROBOT: remove task from the (input new-todo box)
//6. ROBOT: update the number of tasks in the footer / array
//7. ROBOT: task string should move from input to <ul.todo-list><li> (update visual UI)
//$('ul.input.new-todo') = selecting a class
//$('ul#todo-list') = ID

//task string name goes @ <label> AND value= (value of input.edit)
//checkbox = input.toggle  ('input.toggle').value (input is a dictionary), toggles Boolean
//debugger;
(function(window) { //IIFE: Immediately Invoked Function Expression
  'use strict';
  //I can add a task to my list...
  // Questions
  //1. What event should I be listening for?keydn,keyup,keypress
  //2. What element makes sense to listen for that event? input.new-todo
  //3. What do I need to do when that event fires?

  //Given an HTML element  <input class = "new-todo">
  var newTodoInput = document.querySelector('input.new-todo')

  //When the user types a task
  newTodoInput.addEventListener('keyup', function addTodoController(event) {
    if (event.keyCode === 13) { //AND presses the "Enter" key

      var task = newTodoInput.value;
      //todos.taskList.push(task);
      todos.addTaskToList(task, todos.taskList);

      document.querySelector('input.new-todo').value = "";


      if (todos.taskList.length === 1) {
        document.querySelector('span.todo-count').textContent = todos.taskList.length + ' Item Left';
      } else {
        document.querySelector('span.todo-count').textContent = todos.taskList.length + ' Items Left';
      };

			document.querySelector('ul.todo-list').innerHTML += ("<li><div><input class='toggle' type='checkbox'><label>" + task + "<button class='destroy'>")
      console.log(todos.taskList);
      console.log(todos.taskList.length);

    }

  });

  //1. What event should I be listening for?'mouseOver', 'click'
  //2. What element makes sense to listen for that event? ul.todo-list
  //3. What do I need to do when that event fires?


  // var deleteTask = document.querySelector('ul.todo-list')
  // deleteTask.addEventListener('mouseover', function() {
  //
  //   console.log("Hello");
  // });

  var deleteButtons = document.querySelectorAll('button.destroy');
  var deleteTaskButton = document.querySelector('button.destroy')
  deleteTaskButton.addEventListener('click', function() {

    console.log("Click Works");
  });

  _.forEach(deleteButtons, function(element, index, deleteButtons) {
    element.addEventListener('click', function() {
      console.log("This works for all of the buttons!!");

    });

  });

  var editTask = document.querySelectorAll('li');

  _.forEach(editTask, function(element, index, editTask) {
    element.addEventListener('dblclick', function() {
      console.log("Sup");

    });

  });

})(window);

// CONTROLLER FOR: I can edit a task on my list...
// 1. What event should I be listening for?
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?

// CONTROLLER FOR: I can complete a task on my list...
// 1. What event should I be listening for? (double click, keyup [Enter, tab, esc])
// 2. What element makes sense to listen for that event? ('ul.todo-list')
// 3. What do I need to do when that event fires?

// CONTROLLER FOR: I can view the list...
// 1. What event should I be listening for?
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?

// CONTROLLER FOR: I can view the list...
// 1. What event should I be listening for?
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?
