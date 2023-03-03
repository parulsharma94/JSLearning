function maleMarrigeEligibility(gender,age,boyName){
 if (age < 0 || age== undefined) { // true && false = false
   return `hey ${boyName} your age ${age} is not valid`;
   
 }


 if (gender=="Male" && age>=21) {
    var str = `Hey ${boyName} you are eligible for marriage`;
    return str;
    
 } else {
    var str = `${boyName} you are not eligible for marriage`;
    return str;
    
 }
}
var result = maleMarrigeEligibility("Male",25,"Billgates");
console.log(result);

var result = maleMarrigeEligibility("Male",-30,"Shivam");
console.log(result);

var result = maleMarrigeEligibility("Male",undefined,"Raju");
console.log(result);

