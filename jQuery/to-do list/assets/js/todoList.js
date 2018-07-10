var todos = [];

$("input").on("keypress", function(event){
	if (event.which === 13) {
		todos.push();
	}
});

$(".plusTodo").click(function(){
	$("input").fadeToggle(300);
});

$("li").click(function(){
	$(this).css({
		"text-decoration": "line-through",
		"color": "gray"
	});
});

