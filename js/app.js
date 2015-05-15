//controller part of MVC structure
/*
(function (window) {
	'use strict';
})(window);
*/
//debugger;

(function (window) {
	'use strict';
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
var addTask = document.querySelectorAll('input.new-todo');
  addEventListener('keyup', function EnterKey(event){
		//given an HTML element <input class="new-todo">
		if ( event.keyCode === 13 ){
      var task = document.querySelector('input.new-todo').value;
			todos.taskList.push(task);
			console.log(todos.taskList);
		}
});
//simplified:
/*
document.querySelectorAll('input.new-todo');
  addEventListener('keyup', function(){

}); //end of addEventListener post EnterKey function
*/
})(window);
/*

(function (window) {
	'use strict';
	var list = [ ];

	todos.addTaskToLisgitt("Remember the beer", list);
	console.log(list);

document.head.parentElement.className="js"; // It's alive!

var elements = document.querySelectorAll('.cbp-nttrigger');

var elements = document.querySelectorAll('ul');
var listItem = document.querySelectorAll('li');

_.forEach(elements, function(element, index, elements){
	  element.addEventListener('click', function(){
	    elements[index].parentElement.classList.toggle('todo-list');
	  });
	});

	_.forEach(listItem, function(element, index, elements){
	    element.addEventListener('click', function(){
	        element.parentElement.classList.toggle('todo-list');
	    });

document.querySelector('.new-todo');
document.getElementsByClassName('new-todo');

$('input.new-todo').addEventListener('keypress', function(){
	console.log(arguments);
});
$('input.new-todo').addEventListener('keyup', function(){
	console.log(arguments);
});
$('input.new-todo').addEventListener('keydown', function(){
	console.log(arguments);
});
document.body.addEventListener('keydn', function(){
	console.log(arguments)
});

addTaskToList("Remember the beer", list);

/*
var addTask = document.querySelector('header')
	var that = this;
	this.ENTER_KEY = 13;

	addTask.addEventListener(this.ENTER_KEY, function view(template){
		console.log('test');
	})
*/

/*
var nestedElements = document.querySelectorAll('h4');
elements[0].addEventListener('click', function(){
	elements[0].parentElement.classList.toggle('cbp-ntopen');
});

elements[1].addEventListener('click', function(){
	elements[1].parentElement.classList.toggle('cbp-ntopen');
});
*/

/*
for ( var index = 0; index < elements.length; index++ ){
		var element = elements[index]
		element[index].addEventListener('click', function(){
				console.log(element, index, element[index])
				element[index].parentElement.classList.toggle('cbp-ntopen');
		});
}*/

/*
_.forEach(elements, function(element, index, elements){
		element.addEventListener('click', function(){
			var addTask = document.querySelector('header')
		});
});
*/

/*
_.forEach(nestedElements, function(element, index, nestedElements){
 		element.addEventListener('click', function(){
 				element.parentElement.classList.toggle('cbp-ntopen');
 		});
});
*/
//})(window);
