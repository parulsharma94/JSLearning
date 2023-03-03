function weekDay(day) {
    switch (day) {
        case 1:
            console.log(`day of the week is ${day} monday`);
            console.log("monday is the start day of the week");
            break;

         case 2:
            console.log(`day of the week is ${day} tuesday`);
            break;
         case 3:
            console.log(`day of the week is ${day} wednesday`);
            break;
        case 4:
            console.log(`day of the week is ${day}thrusday`);
            break;
        case 5:     
            console.log(`day of the week is ${day} friday`);
            break;
        case 6:     
            console.log(`day of the week is ${day} saturday`);
            break;
        case 7:     
            console.log(`day of the week is ${day} sunday`);
            break;
        default:
            console.log(`Invaid day:${day}`);
            break;
    }
    console.log(`End of switch case for ${day}`);
    
} 
weekDay(3);
weekDay(7);
weekDay(0);
weekDay(-2);
weekDay(100);
weekDay(null);
weekDay(undefined);