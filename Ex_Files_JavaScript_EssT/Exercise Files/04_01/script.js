// Regular function, called explicitly by name:
function multiply(a,b) {
    var result = a * b;
    console.log("3 multiplied by 3 is ", result);
    return result;
}
var multiplied = multiply(3,3);

//originally was written:
/*function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
    }

multiply();
 */

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())

//Three functions: named functions, anonymous functions, immediately invoked expressions.
