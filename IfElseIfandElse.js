//Read single digit and write word
let num = Math.floor(Math.random() * 10);
if (num == 1) {
    console.log("One");
} else if (num == 2) {
    console.log("Two");
} else if (num == 3) {
    console.log("Three");
} else if (num == 4) {
    console.log("Four");
} else if (num == 5) {
    console.log("Five");
} else if (num == 6) {
    console.log("Six");
} else if (num == 7) {
    console.log("Seven");
} else if (num == 8) {
    console.log("Eight");
} else if (num == 9) {
    console.log("Nine");
} else {
    console.log("Zero");
}

//read a number and print day
let day = (Math.floor(Math.random() * 10) % 7) + 1;
if (day == 1) {
    console.log("Monday");
} else if (day == 2) {
    console.log("Tuesday")
} else if (day == 3) {
    console.log("Wednesday")
} else if (day == 4) {
    console.log("Thursday")
} else if (day == 5) {
    console.log("Friday")
} else if (day == 6) {
    console.log("Saturday")
} else {
    console.log("Sunday")
}

// Convert to word format
let value = "";
let power = Math.floor(Math.random() * 10) % 4;
let number = Math.pow(10, power);
if (number == 1) { value = "Unit"; }
else if (number == 10) { value = "Ten"; }
else if (number == 100) { value = "Hundred"; }
else if (number == 1000) { value = "Thousand"; }
console.log(number + " is " + value);

//Find the max and min of given functions
let a = 1;
let b = 2;
let c = 3;
let val1 = a + b * c;
let val2 = a % b + c;
let val3 = c + a / b;
let val4 = a * b + c;
if ((val1 > val2) && (val1 >= val3) && (val1 > val4)) {
    console.log("Maximum value is Val1: " + val1);
} else if ((val2 > val3) && (val2 > val4)) {
    console.log("Maximum value is Val2: " + val2);
} else if (val3 > val4) {
    console.log("Maximum value is Val3: " + val3);
} else {
    console.log("Maximum value is Val4: " + val4);
}

if ((val1 < val2) && (val1 < val3) && (val1 < val4)) {
    console.log("Minimum value is Val1: " + val1);
} else if ((val2 < val3) && (val2 < val4)) {
    console.log("Minimum value is Val2: " + val2);
} else if (val3 < val4) {
    console.log("Minimum value is Val3: " + val3);
} else {
    console.log("Minimum value is Val4: " + val4);
}