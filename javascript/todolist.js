var input = prompt("What would u like to do?");
var todos = [];
while (input !== "quit") {
	if (input === "list") {
		console.log(todos);
	}
	else if (input === "new") {	
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}
	input = prompt("What would u like to do?");
}
