//Convert single digit to word format
{
    let word = "";
    let number = Math.floor(Math.random() * 10);
    switch (number) {
        case 0:
            word = "Zero";
            break;
        case 1:
            word = "One";
            break;
        case 2:
            word = "Two";
            break;
        case 3:
            word = "Three";
            break;
        case 4:
            word = "Four";
            break;
        case 5:
            word = "Five";
            break;
        case 6:
            word = "Six";
            break;
        case 7:
            word = "Seven";
            break;
        case 8:
            word = "Eight";
            break;
        case 9:
            word = "Nine";
            break;
    }
    console.log(number + " = " + word);
}

//Print the day of the week
{
    let day = "";
    let number = Math.floor(Math.random() * 10) % 7 + 1;
    switch (number) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Sunday";
            break;
    }
    console.log("Day " + number + " is - " + day);
}

//Convert to word format
{
    let word = "";
    let power = Math.floor(Math.random() * 10) % 4;
    let number = Math.pow(10, power);
    switch (number) {
        case 1:
            word = "One";
            break;
        case 10:
            word = "Ten";
            break;
        case 100:
            word = "Hundred";
            break;
        case 1000:
            word = "Thousand";
    }
    console.log(number + " = " + word);
}

//Convert different length
{
    let num = Math.floor(Math.random() * (909) + 100);
    let choice = Math.floor(Math.random() * 10) % 4;
    let conversion;
    switch (choice) {
        case 0:
            conversion = num * 12;
            console.log(num + " feet = " + conversion + " inch");
            break;
        case 1:
            conversion = num * 0.3048;
            console.log(num + " feet = " + conversion + " meter");
            break;
        case 2:
            conversion = num / 12;
            console.log(num + " inch = " + conversion + " feet");
            break;
        case 3:
            conversion = num / 0.3048;
            console.log(num + " meter = " + conversion + " feet");
    }
}