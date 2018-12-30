//demonstrates continue. This finds the prime numbers between 1-100.
const CEILING = 100;

function primeTest(testValue) {
    let isPrime = true;
    for ( let i = 2; i<testValue; i++ ) {
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
    if ( result == false) {
        continue;
    }
    console.log(i + " is a prime number.");
}
//Use continue when you need to avoid a certain condition within a loop.