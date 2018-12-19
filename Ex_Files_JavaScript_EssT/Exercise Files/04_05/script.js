
//Named functions are good when we need to reuse it multiple times or it's a big function.
//Anonymous functions, don't hae names so they have to be tied to a variable, event or similar.
/*
var a = 5/7;
var b = 1/8;

var theBiggest = function() {
	var result;
	a>b ? result = ["a ", a] : result = ["b ", b];
	console.log(result);
}

//only executes if we call the variable as if it were a normal function.
theBiggest();
*********************************************************/

//Can also return the results of an anonymous function by using the return keyword...
/*
var a = 5/7;

var b = 6/8;

var theBiggest = function() {
	var result;
	a>b ? result = ["a ", a] : result = ["b ", b];
	return result;
}

//only executes if we call the variable as if it were a normal function.
console.log(theBiggest());
 ********************************************************/

//If we don't have a name for the function how do we use arguements...
var a = 5/7;
var b = 6/8;

var theBiggest = function(a,b) {
	var result;
	a>b ? result = ["a ", a] : result = ["b ", b];
	return result;
}

//only executes if we call the variable as if it were a normal function.
console.log(theBiggest(7/9,13/25));
//Even though we defined a and b above the anonymous function, these console.log values will be passed.