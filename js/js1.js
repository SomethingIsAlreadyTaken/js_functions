(function(){
	'use strict';

    var sieve = [], i, j, primes = [],
    	num = +prompt('Enter your number');

function getPrimes(max) {
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}


getPrimes(num);
document.write(primes);

})();
