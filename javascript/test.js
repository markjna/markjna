// function printReverse() {
// 	var num = [1,2,3,4];
// 	num.reverse();
// 	num.forEach(function(array){
// 		console.log(array);
// 	})
// }

// function newPrintReverse() {
// 	var i = ["a", "b", "c"];
// 	i.reverse();
// 	i.forEach(function(array){
// 		console.log(array);
// 	})
// }

// REVERS CHARACTERS OF ARRAY

function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([3, 4, 2]);
printReverse(["d", "t", "q"]);

// CHECKING IDENTICAL OF ARRAY

function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (first !== arr[i]) {
			return false;
		}
	}
	return true;
}

// ANOTHER SOLUTION OF UNIFORM

// function isUniform(arr) {
// 	var first = arr[0];
// 	arr.forEach(function(element) {
// 		if (element !== first) {
// 			return false;
// 		}
// 	});
// 	return true;
// }

// SUM ARRAY

function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

// Max of array

// function max(arr) {
// 	return Math.max.apply(null, arr);
// }

// Another solution of max of array

function max(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}