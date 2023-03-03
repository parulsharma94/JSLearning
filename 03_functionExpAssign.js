var check_leap_year = function(leap_year){

   if (typeof leap_year== String) {
      console.log(`${leap_year} is not Valid  year`);
      return ;
   }

   if (value == undefined || value ==null || value == isNaN) {
      console.log(`${leap_year} is not Valid  year`);
      return ;
   }

   var value = leap_year % 4;
  
   if (value == 0 ){
    console.log(`${leap_year} is leap year`);
   }else {
    console.log(`${leap_year} is  not leap year`);
   }

   
}
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);

check_leap_year(null);
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year("Twenty Twenty ");