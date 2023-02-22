console.log("*****step1****");

function squareOfWordLenght(xyz){
    

    var length = xyz.length;
    var sqr = length * length;

    console.log("word is ",xyz);
    console.log("word length is ",length);
    console.log("word length square is ",sqr);

}

squareOfWordLenght("Java Script");
squareOfWordLenght("Google Chrome");
squareOfWordLenght("Developer Smart");

console.log("****step2******");



function details(){
    var stringMsg = "I am Angular Developer";

var length= stringMsg.length;
var wordcount  = stringMsg.split(" ");

var wordlength = wordcount.length


var result = length / wordlength;

 var multiplicaionresult  = length * wordlength ;

console.log(`String Length is  ${length } Total Words are ${wordlength} result is : ${result} 
multiplicaionresult is : ${multiplicaionresult}`);






}
details();