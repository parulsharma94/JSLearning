console.log(`start`);
var num =    10;
if(num>0){
    console.log(`inside if`);
    console.log(`Number is positve`);

}
console.log(`End`);

var ageForVote=20;
if (ageForVote >= 18){
    console.log("you are eligible for voting");
    console.log(`Age is: $(ageForVote)`);
}
console.log(`End of next if block`);

function checkEvenOdd(num){
if (num%2==0){
    return "Even";
}
if (num%2!=0){
    return "Odd";
}

}
var result = checkEvenOdd(45);
console.log(`Given Number 45 is ${result}`);
var result = checkEvenOdd(70);
console.log(`Given Number 70 is ${result}`);

var num1 = 5;
if (num1>0){
    console.log(`Number ${num1} is positive`);
   
} else {
    console.log(`Number ${num1} is negitive`);

}

function maleMarrigeEligibility(gender ,age,boyName){
    if (gender=="male"&& age>=21){
        console.log("you are eligible");
    } else {
        console.log("Not eligible ");
    }
}
maleMarrigeEligibility("male",25,"Billgates")
maleMarrigeEligibility("male",20,"Anil")
