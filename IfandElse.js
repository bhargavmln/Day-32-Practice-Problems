//Check 5 random 3 digit number and give the maximum one
let max = 0;
let min = 1000;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * (909) + 100);
    console.log(num);
    if (min > num) {
        min = num;
    } else {
        min = min;
    }
    if (max < num) {
        max = num;
    } else {
        max = max;
    }
}
console.log("max: " + max + "\nmin: " + min);

//Check if the day is between March 20 and June 20

var prompt = require('prompt-sync')();
let userDate = new Date(prompt('Enter the date:'));
let month = userDate.getMonth();
let day = userDate.getDate();
let check = false;
if (month < 7 && month > 2) {
    if (month == 3 && day < 20) {
        check = false;
    } else {
        if (month == 6 && day > 20) {
            check = false;
        } else {
            check = true;
        }
    }
} else {
    check = false;
}
console.log(check);

//Check for leap year
var prompt = require('prompt-sync')();
let year = prompt('Enter the year:');
if (year > 999) {
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            console.log(year + " is a leap year");
        } else {
            if (year % 400 == 0) {
                console.log(year + " is a leap year");
            } else {
                console.log(year + " is not a leap year");
            }
        }
    }
}

//Check if head or tales
const Is_HEAD = 0;
let headOrTail = Math.floor(Math.random() * 10) % 2;
if (headOrTail == Is_HEAD) {
    console.log("Heads");
} else {
    console.log("Tails");
}
