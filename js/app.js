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
(function(window) {
  'use strict';

  var newTodoInput = document.querySelector('input.new-todo');
  addTask.addEventListener('keyup', function EnterKey(event) {
    //given an HTML element <input class="new-todo">
    if (event.keyCode === 13) {
      var task = newTodoInput.value;
      todos.addTaskToList(task, todo - list) {
        console.log(todos.taskList);
      }
    }

    var newTodoInput = document.querySelector('input.new-todo');
    var deleteTask = document.querySelector('ul.todo-list');
    var deleteX = document.querySelectorAll('button.destroy');

    document.querySelector('input.new-todo').value = "";

		//number of tasks in footer
    function() {
      var todoCountText = todos.taskList.length + ' Item';
      if (todos.taskList.length === 1) {
        todoCountText += ' Left';
      } else {
        todoCountText += 's Left';
      };
    }

		todoCountElement.text = todoCountText;

		document.querySelector('ul.todo-list').innerHTML += (
			"<li> new task: " + task +
			"</li>"
		)

    console.log(todos.taskList);

    _.forEach(deleteX, function(element, index, deleteX) {
      element.addEventListener('click', function removeLi() {
        var deleteX = document.querySelectorAll
        console.log("delete crap!");
      });
    });

    _.forEach(editTask, function(element, index, editTask) {
      element.addEventListener('dblclick', function() {
        console.log("edit this shit?");
      })
    })

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
