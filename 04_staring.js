var greet= "Good Morning";
console.log(typeof greet);

console.log("total Number of chars avalable into this string variable-greet");
var greetLength = greet.length;
console.log( " total length of string is:" ,greetLength );

console.log("find the character by index value");
var charAtIndex3 = greet.charAt(3);
console.log("character avaliable at index 3 is:",charAtIndex3);

console.log("find the Last charcter");
var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Last char is:" ,charAtLastIndex);
 
console.log("find the Index by the charcter value");
var indexOfM= greet.indexOf("M")
console.log("Index of char M is:",indexOfM);

console.log("Index of char which is not available into the string",greet.indexOf('z'));

console.log("index of o char",greet.indexOf('o')); 
console.log("index of o char using lastIndexOf:()",greet.lastIndexOf('o'));

var replaceResult=greet.replace("Morning", "Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper case:",replaceResult.toUpperCase());
console.log("Lower case:",replaceResult.toLowerCase());

var myName= "   Mohit  Sharma  ";
var myNameAfterTrim =myName.trim();
console.log("Removing extra start and end spaces using trim:", myNameAfterTrim,myName.length,myNameAfterTrim.length);

//find the total extra spaces removed from the string - myName

var count= myName.length- myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(),myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the greet or not:",greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not:",greet.includes(" Afternoon "));
console.log("Is substring o includes in the greet or not:",greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5,12);
console.log(sliceREsult);
console.log(greet.slice(2,5));

console.log("split() method");
var greet = "Good Morning my dear freiend";
var splitResult = greet.split("");
console.log(splitResult);
console.log("total words",splitResult.length);

