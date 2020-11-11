//Calculate powers of 2
{
    let value = 1;
    console.log(value);
    let n = (Math.floor(Math.random() * 10) % 10) + 1;
    for (i = 0; i <= n; i++) {
        value = value * 2
        console.log(value);
    }
}

//Print nth harmonic number
{
    let value = 0;
    let n = (Math.floor(Math.random() * 10) % 10) + 1;
    for (i = 1; i <= n; i++) {
        value = value + 1 / i;
    }
    console.log(n +"th Harmonic = " + value);
}

//To calculate factorial of a number
{
    let number = Math.floor(Math.random() * 100);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(number + "! = " + factorial);
}

//To determine if the number is prime or not
{
    let number = Math.floor(Math.random() * 1000)+2;
    let prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) prime = false;
    }
    if (prime) {
        console.log(number + " is Prime!");
    }
    else{
        console.log(number + " is Not Prime!");
    } 
}

//Given a range of numbers print prime
{
    let numbers = [7,5,24,44,3,80]
    let primes = [];
    for(let number of numbers){
        let prime = true;
        for (let i = 2; i < number; i++) {
            if (number % i == 0) prime = false;
        }
        if (prime){
            primes.push(number);
        }
    }
    console.log("Prime numbers in the list are: " + primes);
}

//To print factors of a number
{
    let number = Math.floor(Math.random()*100);
    let factors = [];
    for(let i=1;i<=number;i++){
        if(number%i == 0)
        factors.push(i);
    }
    console.log("The factors are: " + factors);
}