var input = prompt("What would u like to do?");
var todos = [];
while (input !== "quit") 
{
	if (input === "list") 
	{
		listTodo();
	} else if (input === "new") 
	{	
		allNewTodo();
	} else if(input === "delite") 
	{
		allDeliteTodo();
	}
	input = prompt("What would u like to do?");
}
console.log("See u later!");
function listTodo()
{
	console.log("******************");
	todos.forEach(function(todo, index) 
	{
		console.log(index + ": " + todo);
	});
	console.log("******************");
}
function allNewTodo()
{
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added " + newTodo);
}
function allDeliteTodo()
{
	var deliteTodo = prompt("Type index of todo u wanna to delite");
	todos.splice(deliteTodo, 1);
	console.log("Delited index " + deliteTodo);
}
