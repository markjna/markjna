var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var input = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
// var h1 = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 0;
input.value = 0;

// p1.addEventListener("click", function(){
// 	p1Score++;
// 	h1.innerHTML = p1Score + " to 0";
// })

p1.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}
});

p2.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click", function(){
	resetButton();
	input.value = 0;
	winningScore = 0;
	winningScoreDisplay.textContent = input.value;
});
function resetButton(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

input.addEventListener("change", function(){
	winningScoreDisplay.textContent = input.value;
	winningScore = Number(input.value);
	resetButton();
});