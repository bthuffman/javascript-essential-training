/*
var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest(7/9,13/25));



//What if console log the variable out itself.
console.log(theBiggest);
//This shows the code block [function] for the anonymous function
************************************************************/

/*
//How to populate the variable with the result of the anonoymous function, use a immediately invoked function expression
var theBiggest = (function(a,b) {
	var result;
	a>b ? result = ["a", a] : result = ["b", b];
	return result;
})(7/9,13/25)
//This invokes the function. ()

//Radically different than the other two function types. Conisder the below
console.log(theBiggest);
*******************************************************/
/*
var theBiggest = (function(a,b) {
	var result;
	a>b ? result = ["a", a] : result = ["b", b];
	return result;
})(firstFraction,secondFraction)

var firstFraction = 7/9;
var secondFraction = 13/25;

console.log(theBiggest);
//The result is undefined value of b because this isn't actually an immediately invoked function expression. Below is.
******************************************************/
//Correct immediately invoked function. This works because the external variables have to be listed out before said function.
var firstFraction = 7/9;
var secondFraction = 13/25;

var theBiggest = (function(a,b) {
	var result;
	a>b ? result = ["a", a] : result = ["b", b];
	return result;
})(firstFraction,secondFraction)


console.log(theBiggest);
//The benefit of this type of function is that it's great for running immediately and produces a direct output (unaffected by code further down the code).
//Often hooked to event listeners.
//Careful with how structure since the browser runs the function as soon as it reads it.
