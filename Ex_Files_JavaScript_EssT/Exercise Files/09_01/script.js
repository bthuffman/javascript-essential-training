for (var i=0; i<10; i++) {
	console.log(i);
}

//same as the for loop above, but tests a condition outside of the while declaration (allows for more complex functions given certain outside)
//running the loop until it would otherwise no longer be less than 567
var j = 1;
var reps = 0;
 while (j<567) {
 	++reps;
 	console.log(reps + " reps gives us" + j);
 	j*=2.1;
 }

//To insure a code runs at least once even when I has already met it's set limit (j=567) use the Do while loop.
