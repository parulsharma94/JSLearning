console.log("****voteEligibility******");

function voteEligibility(age){
  if (age < 0 || age == undefined || age == null || age > 100 || age <= 0 ) {
    console.log(`hey your age is: ${age}  please provide valid age`);
    return
  }

   
        if (age >= 18 ) {
      console.log(`your age is : ${age} so you are eligilible for voting `);  

    } else {
        console.log(`your age is:${age} not eligilible for voting`);
        
    }
  
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);