//New ECMAScript 6 variables: Constant (can't be changed) and let (block scope variable, smaller scope then var)
/* CONSTANT
const MYCONSTANT = 6;
console.log(MYCONSTANT);
// MYCONSTANT = 5; //Will show an error for trying to change it, defeating the purpose of constant
************************************************************/

//Let
/*
function logScope() {
	var localVar = 2;

	if(localVar) {

	var localVar = "I'm different!";
	console.log("nested lcoal var: ", localVar);
}

	console.log("logScope localVar: ", localVar);
}

logScope();
// in this case would get "I'm Different in both logs. This is because it is reasigned it's value. Need let if whant the 2 localVar to be used.
*/

function logScope() {
	let localVar = 2;

	if(localVar) {

		let localVar = "I'm different!";
		console.log("nested lcoal var: ", localVar);
	}

	console.log("logScope localVar: ", localVar);
}

logScope();
//Now the nested one will show I'm different and the other will be 2.
//Don't have to use let for both however, the first var can be var not let.
//This is because the let localVar limits it's scope to the conditional statement, whereas var localVars scope is the whole function itself plus all of it's child elements.