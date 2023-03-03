function interviewEligibility(gradeScore,hscScore,sscScore,candiadateName){
    if (gradeScore >= 70 || hscScore >= 80 || sscScore > 90 ) {
        console.log(`Congrates ${candiadateName} you are eligible for TCS interview`);
        
    } else {console.log(`Unfortunately  ${candiadateName} you are not eligible for interview`);
        
    }

}
interviewEligibility(80,86,90,"Parul Sharma");
interviewEligibility(70,65,88,"Diksha Sharma");
interviewEligibility(60,79,88, "Priya");