var num = 4
var strGuess = prompt("Guess a number :)");
var guess = Number(strGuess);
if (guess === num){
	alert("Congratulations! You guessed it :)");
}
else if (guess < num){
	alert("Too low. Try again :)");
}
else {
	alert("To hight. Try again :)");
}