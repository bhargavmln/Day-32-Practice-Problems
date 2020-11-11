//Check if 2 numbers are palindromes
{
    function palindromeCheck(number1, number2) {
        let number = 0;
        let r = 0;
        while (number1 > 0) {
            r = number1 % 10;
            number = number * 10 + r;
            number1 = Math.floor(number1 / 10);
        }
        if (number == number2) { console.log("Numbers are palindrome!"); }
        else { console.log("Numbers are not palindrome!"); }
    }
    palindromeCheck(14541, 14541);
}

//Check if a numbers palindrome is prime
{
    function prime(number) {
        let isPrime = true;
        for (let i = 2; i < number; i++) {
            if (number % i == 0) isPrime = false;
        }
        if (isPrime) { console.log("The number is prime"); }
        else { console.log("The number is not prime"); }
    }
    function palindrome(number) {
        let palindrome = 0;
        let r = 0;
        while (number > 0) {
            r = number % 10;
            palindrome = palindrome * 10 + r;
            number = Math.floor(number / 10);
        }
        return palindrome;
    }

    var prompt = require('prompt-sync')();
    let input = prompt('Enter a number:');
    console.log(prime(palindrome(input)));
}

//Temperature Conversion
{
    function tempConversion(temp) {
        var prompt = require('prompt-sync')();
        let input = parseInt(prompt('Convert to 1.degF or 2.degC:'));
        console.log(input);
        switch (input) {
            case 1:
                if (temp > 1 && temp < 100) {
                    temp = (temp * (9 / 5)) + 32;
                    console.log("Temperature in degF: " + temp);
                } else {
                    console.log("Invalid temperature range");
                }
                break;
            case 2:
                if (temp > 32 && temp < 212) {
                    temp = (temp - 32) * (5 / 9);
                    console.log("Temperature in degC: " + temp);
                } else {
                    console.log("Invalid temperature range");
                }
                break;
            default:
                console.log("Invalid Selection");
        }
    }

    tempConversion('80');
}