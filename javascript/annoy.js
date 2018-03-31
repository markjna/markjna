// var ask = prompt("Are we there yet?");
// while (ask !== "yes") {
// 	var ask = prompt("Are we there yet?");
// }
// alert("Yey, we made it!")


// Version 2

var ask = prompt("Are we there yet?");
while (ask.indexOf("yes") === -1) {
	var ask = prompt("Are we there yet?");
}
alert("Yey, we made it!")
