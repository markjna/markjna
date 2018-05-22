// var isPink = false;
// document.querySelector("button").addEventListener("click", function(){
// 	var body = document.querySelector("body");
// 	if (isPink){
// 		body.style.background = "white";
// 	} else {
// 		body.style.background = "pink";
// 	}
// 	isPink = !isPink;
// });

document.querySelector("button").addEventListener("click", function(){
	document.body.classList.toggle("colorChange");
});