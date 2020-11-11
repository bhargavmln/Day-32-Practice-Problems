//To get Single digit
{
    let singleDigit = Math.floor(Math.random()*10);
    console.log("Single digit : " + singleDigit);
}
//To get a dice number
{
    let diceNumber = Math.floor(Math.random()*10) % 6 + 1;
    console.log("Dice Number : " + diceNumber);
}
//To add two random dice number
{
    let dn1 = Math.floor(Math.random()*10) % 6 + 1;
    let dn2 = Math.floor(Math.random()*10) % 6 + 1;
    console.log("Two dice no sum : " + (dn1+dn2));
}
//to get 5 random 2 digit no and find sum and average
{
    let random =0;
    for(i=0;i<5;i++){
    let random1 = Math.floor(Math.random()*100);
    random += random1;
    }
    console.log("Sum : "+random);
    console.log("Avg : "+(random/5));
}
//Unit conversion
{
    //a
    const feet = 12;
    console.log("42 feet into inches = "+(42*feet));
    //b
    let feetByMeter = 0.305;
    let plotArea = ((6060)/(feetByMeter*feetByMeter));
    console.log("Area of 60ft by 60 ft plot in metres = "+ plotArea);
    //c
    let totalAreaInAcres = (plotArea*25) * 0.000247;
    console.log("Total plot area(20 plots) in acres = "+totalAreaInAcres);
}