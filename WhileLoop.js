//Calculate powers of 2 upto 256
{
    let value = 1;
    console.log(value);
    let i = 1;
    while (i <= 8) {
        value = value * 2
        console.log(value);
        i++;
    }
}

//Flip con until head or tail occur 11 times
{
    let headCount = 0;
    let tailCount = 0;
    while (headCount < 11 && tailCount < 11) {
        let headOrTail = Math.floor(Math.random() * 10) % 2;
        if (headOrTail == 0) { headCount++ }
        else { tailCount++ }
    }
    if (headCount == 11) { console.log("Head Wins " + headCount) }
    else { console.log("Tail Wins " + tailCount) }
}

//Gambler bet count
{
    let amount = 100;
    win = 0;
    loss = 0;
    while (amount != 0 && amount != 200) {
        let winOrLoss = Math.floor(Math.random() * 10) % 2;
        if (winOrLoss == 0) {
            amount = amount - 1;
            loss++
        } else {
            amount = amount + 1;
            win++
        }
    }
    console.log("Wins :" + win + " Losses: " + loss);
}

//Find the magic number
{
    let upperLimit = 100;
    let lowerLimit = 1;
    var prompt = require('prompt-sync')();
    let number = prompt('Choose a number between 1 and 100:');
    let checkPoint;
    while(number!=checkPoint){
        checkPoint = Math.floor((upperLimit+lowerLimit)/2);
        if(number<checkPoint){
            upperLimit = checkPoint;
            console.log("Number is less than " + checkPoint);
        }
        else if(number>checkPoint){
            lowerLimit = checkPoint;
            console.log("Number is greater than " + checkPoint);
        }
    }
    console.log("Magic number is " + checkPoint);
}