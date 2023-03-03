function display(args){
    console.log(args * args);
} 
display(30);

var num = 100;
console.log(num);

var show = function (args){
    console.log(`hi Good Morning`);
}
show();
console.log(show);
//FE = Function Exprassion
var sum = function(args1,args2){
    console.log(args1 + args2);
    return args1*args2
}
var result = sum(100,100);
console.log(result);