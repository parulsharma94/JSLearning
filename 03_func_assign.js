
console.log("*****Step1 *******");

function goodmorning(){
console.log("hello goodmorning");
}
goodmorning();

function goodevening(){
    console.log("hello goodevening");
    }
    goodevening();

    console.log("*****Step 2*******");

    function personalDetails(firstName,lastName,collageName){
        console.log("my first name is:",firstName);
        console.log("my last name is:",lastName);
        console.log("my collage namme is:",collageName);
    }
    personalDetails("Parul" ,"Sharma","MIMT");

    console.log("*****Step3 *******");

    function swapValueDude(value1,value2){

     console.log("before swapping",value1,value2);

        var temp=value1;
        value1=value2;
        value2=temp;

        console.log("After  swapping",value1,value2);
    }

    var value1= "Virat";
    var value2="Anushkha";

    swapValueDude(value1,value2);

     value1= 1000;
     value2=2000;
    swapValueDude(value1,value2);

    console.log("*****Step4 *******");

    function addThreeValue(num1,num2,num3){
      
      var sum =  num1+num2+num3;
           return sum;
    }

    var addResult = addThreeValue(10.23,600,40);
 console.log(addResult); 

 var addString = addThreeValue("hello","Good","morning");
console.log(addString);