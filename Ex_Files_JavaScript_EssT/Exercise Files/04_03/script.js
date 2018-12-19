function findBiggestFraction(a,b) {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

//Use arguements [(a,b) in the function] instead, much better practice.
// var a = 3/4;
// var b = 5/7;

var firstFraction = 3/4;
var secondFraction = 5/7;
findBiggestFraction(firstFraction,secondFraction);
//Why do it this way instead of 4.01? Can reuse this function as many times as necessary, with arguments you can. M
//Makes it leaner and easy to maintain.
findBiggestFraction(7/16,13/25);
findBiggestFraction()