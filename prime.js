

function init() {       //wrapper to ensure code executes after html page load



    var listOfPrimes = [];
    var limits  = { lower : null,
                    upper: null,
                    validateLower: function() {
                        var warning;
                        if (this.lower < 2 || this.lower == null) {
                            warning = "Oops! Please start with a positive integer greater than 1.";
                        } else {
                            warning = null;
                        }
                        return warning;
                    },
                    validateUpper: function() {
                        var warning;
                        if (this.upper <= this.lower || this.upper == null) {
                            warning = "Oops, enter a number greater than the lower limit.";
                        } else {
                            warning = null;
                        }
                        return warning;
                    }
    };


    function getLimits() {
        var warning;
        do {
            limits.lower = parseInt(prompt("Enter a starting number:"));
            warning = limits.validateLower();
            if (warning !== null) {
                alert(warning);
            }
        } while (limits.validateLower() !== null);
        do {
            limits.upper = parseInt(prompt("Enter an ending number:"));
            warning =  limits.validateUpper();
            if (warning !== null) {
                alert(warning)
            }
        } while (limits.validateUpper() !== null);

    }

    function isPrime(number) {
        for (var divider = 2; divider < number; divider++) {
            var modulus = number % divider;
            console.log(number + " % " + divider + " = " + modulus);
            if (modulus === 0) {
                return false;
            }
        }
        return true;
    }

    function findPrimesBetween(lower, upper) {
        if (lower == null || upper == null) {
            return;
        }
        if (lower === 2) {
            recordPrimeNumbers(2)
        }

        if (lower % 2 === 0) {   //if lowerlimit is even and greater than 2
            for (var i = (lower + 1); i < upper; i = i + 2) {  //increment to the next odd number and only check every odd
                if (isPrime(i) == true) {
                    recordPrimeNumbers(i);
                }
            }
        } else if ( ( lower % 2 !== 0) && (lower > 2) ) {        // if lowerimit is odd and bigger than 2, start there check every two
            for (var i = lower; i < upper; i = i + 2) {         //only check every two
                if (isPrime(i) == true) {
                    recordPrimeNumbers(i);
                }
            }
        }

    }

    function recordPrimeNumbers(testNumber) {
        listOfPrimes.push(testNumber);      //appends the tested number to the list of primes array
    }

    function displayResult(primes, lower, upper) {

        document.getElementById("numberOfPrimes").innerHTML = "There are " + primes.length + " prime numbers betweem " + lower + " and " + upper;
        document.getElementById("listOfPrimes").innerHTML = "The prime numbers between " + lower + " and " + upper + " are: " + primes;

    }

    getLimits();
    findPrimesBetween(limits.lower, limits.upper);
    displayResult(listOfPrimes, limits.lower, limits.upper);

}