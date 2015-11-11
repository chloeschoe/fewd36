// Structure

var form     = document.querySelector("form");
var button   = document.querySelector("button");
var task     = document.querySelector(".task");
var date  	 = document.querySelector(".date");
var list     = document.querySelector("ul");



console.log(task);
console.log(date);

//Events

button.addEventListener("click",showTask);
task.addEventListener("submit", addTask);
 

//Setup
var tasks = [];

//Event handler function

function addTask(e){

	e.preventDefault();
	tasks.push(task.value);

	// Clean up
	task.reset();
}

function showTask(e) {
	console.log("showTask");
	tasks.forEach(directions);
}

// Update page functions
// ---------------------------------
function tasks(item) {

	// Step 1 - create element
	var li = document.createElement("li");

	// Step 2 - blingification of the element
	li.textContent = item;

	// Step 3 - surgical insertion of our element
	list.appendChild(li);

}






