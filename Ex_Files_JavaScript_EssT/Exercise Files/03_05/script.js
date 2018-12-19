var a = 5;
var b = 5;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);
/****************************************
//If a equals b AND c equals d:
if ( a == b && c == d ) {}

//If a equals b or c equals d (or both):
if ( a == b || c == d ) {}

//If a equals b XOR c equals d (not both):
if ( a == b || c == d ) && ( ( a == b ) != (c == d ) ) {}

//Ex. of Ternary Operator: shorthand of if a equals b console.log "Match" else console log "No Match"
a == b ? console.log("Match") : console.log("No match");

// Long hand of same:
 if ( a == b) {
 console.log("Match");}
 else {
 console.log("No match");
 }
*/
//Array Ex.(object)
var pens;

pens = ["red","green", "orange"];
//Multidemensional arrays has one or more arrays within an array

//Objects have properties (pieces of meta info about object) and methods (functions belonging to the object)

 console.log("Before: ", pens);