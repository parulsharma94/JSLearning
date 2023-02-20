var num1=100;
var num2=200;

var str1="Sweety";//Cutey
var str2="Cutey";//Sweety

var name1="Akshay";
var name2="Sachin";

function swapVariables(value1,value2){
    //var value1=num1,var value2=num2
    console.log("Before Swap", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap", value1, value2);
    return"swapping variables sccefully completed";
}
swapVariables(num1,num2);// function call or function invoke

swapVariables(str1,str2);
swapVariables(name1,name2);

//function with no argument and no return value
function showFullName(){
    console.log("My Full Name is: Parul Sharma");
}
showFullName();//function call or invoke

//function with arguments and no return value
function showAge(age){
    console.log("My Age is:",age);

}
showAge(27);

//function with no arguments and  return value
function fullName(){
    var name="Parul Sharma";
    return name
}
var fName=fullName();
console.log(fName);

//function with  arguments and  return value
function sumOfNumbers(num1,num2,num3){
var sum=num1 + num2 + num3;
return sum;
}
var sumResult = sumOfNumbers(10,45,79);
console.log( sumResult);