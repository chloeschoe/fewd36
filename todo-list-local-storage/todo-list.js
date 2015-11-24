// Structure

var form    = document.querySelector("form");
var button  = document.querySelector("button");
var date    = document.querySelector(".date");
var task    = document.querySelector(".task");
var list    = document.querySelector("ul");
var checkbox= document.querySelector(".checkbox");
 
console.log (task);
console.log (date);


//Setup 

 var checkedList ={

 	"tasks" :[]
 };

//Events

button.addEventListener ("click",addTask);
form.addEventListener   ("submit", addTask);
task.addEventListener   ("submit", addTask);
window.addEventListener ("load", pageLoad);



//Event handler function

function pageLoad(event) {

	if (localStorage.getItem("theme") == null) {

	} else {
		theme= JSON.parse(localStorage.getItem("theme"));
		addTask	(theme) ;
	}
}


function testIt(event) {

	console.log ("testIt");
	console.log (event.target);
	event.target.className ="checked";

	localStorage.setItem('theme', JSON.stringify(theme));


}



//Update page functions 
 

function addTask(theme){

	e.preventDefault();
	var dateValue = date.value;
	var taskValue = task.value;


	//Step 1 -create the element
	var checkbox = document.createElement("input");
	var newTask  = document.createElement("li");
	var span     = document.createElement("span");


	//Step 2 -decorate the elements

	checkbox.setAttribute ("type", "checkbox");	
	span.textContent = task.value +"("+ date.value+ ")";

	//Step 3 -insert the element
	
	list.appendChild(newTask);
	newTask.appendChild(checkbox);
	newTask.appendChild(span);
	//label.appendChild(li);

}






