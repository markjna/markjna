// $(".plusTodo").click(function(){
// 	$("input").fadeToggle(300);
// });

// $("li").click(function(){
// 	$(this).css({
// 		"text-decoration": "line-through",
// 		"color": "gray"
// 	});
// });




// COLT SOLUTION

// check off specific todos by clicking
$("ul").on("click", "li", function(){
	// // if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	// turn it black
	// 	$(this).css({
	// 		"color": "black",
	// 		"text-decoration": "none"
	// 	});
	// }
	// // else
	// else{
	// 	// turn it gray
	// 	$(this).css({
	// 		"color": "gray",
	// 		"text-decoration": "line-through"
	// 	});
	// }

	// SIMPLE WAY
	$(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input
		var newTodo = $(this).val();
		$(this).val("");
		// cteate a new li and add to ul
		$("ul").append("<li><span>x</span> " + newTodo + "</li>");
	}
});