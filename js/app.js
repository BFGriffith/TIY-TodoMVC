//controller part of MVC structure
/*
(function (window) {
	'use strict';
})(window);
*/
//debugger;

document.head.parentElement.className="js"; // It's alive!

var addTask = document.querySelector('header')
	var that = this;
	this.ENTER_KEY = 13;

	addTask.addEventListener(this.ENTER_KEY, function view(template){
		console.log('test');
	})


var elements = document.querySelectorAll('.cbp-nttrigger');

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
