function findBiggestFraction(a,b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    var result; // Local Scope

	a>b ? result = ["a",a] : result = ["b",b];
    return result;
}

var firstFraction = 7/16;
var secondFraction = 13/25;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest.");

console.log(result);   //This would return undefined because result is a local variable.

//Global Scope, declare it outside of any function. Can use it in the root of script and inside functions
//If you change it inside a function then that change becomes global.

//Local scope, declare it inside of a function and get an error if try to call it outside of it.
//Nice to keep when want to use the variable once and then discard. Also uses less resources since don't have to go back and check if it's being used (like global)
