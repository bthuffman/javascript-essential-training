/*
function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

//This assigns due some math to theResult variable at which point it jumps up the variables and does the function.
var theResult = doSomeMath();

console.log("The result: ", theResult);

//The variables exist locally.
*********************************************************/
/*

function doSomeMath() {
	var a = 5;
	var b = 4;

	function multiply() {
		var result = a*b;
		return result;
}

	return multiply;
}

//This assigns due some math to theResult variable at which point it jumps up the variables and does the function.
var theResult = doSomeMath();

console.log("The result: ", theResult());
//We get the result of 20 which is weird, because it shouldn't work.
//The browser reads from the top to bottom and the return multiply inside the doSomeMath function should discard the
// a and b variables.
//The bellow is known as closure
/*							{
	var a = 5;
	var b = 4;

	function multiply() {
		var result = a*b;
		return result;
	}

	return multiply;
//The function multiple relies on outside variables defined outside of it, therefore the computer keeps the variables a and b alive instead of disposing of them.
//Eseentially a closure is.. A function inside a function that relies on the variables of the outside function to work.

*************************************************************/
//Practical applications....
function giveMeEms(pixels) {
	var baseValue = 16;

	function doTheMath() {
		return pixels/baseValue;
	}
	return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());
console.log("Extra large size: ", xlargeSize());

//Note the other definition of a closure is a function that remembers the environment which it was created in.