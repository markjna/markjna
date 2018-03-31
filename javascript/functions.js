function isEven(x) {
	return x % 2 === 0;
}
// function factorial(x) {
// 	if (x === 0){
//     	return 1;
//     }
//     else {
//     	return x * factorial(x - 1);
//     }
// }
function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	return result;
}

function kebabToSnake(str) {
	var newstr = str.replace(/-/gi, "_");
	return newstr;
}