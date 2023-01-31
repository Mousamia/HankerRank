
    function timeConversion(s){
        let dayNight = s[s.length-2] +s[s.length-1]; //Determins if is PM/AM
let sliceTime = s.slice(0, s.length-2); //takes time only as string
let timeSplit = sliceTime.split(":"); //divides time into hr min and sec

let hourUpdate = 0;



if(dayNight === "PM" &&  parseInt(timeSplit[0]) <12){ //if time is less than 12 add 12 to hr only
    hourUpdate = parseInt(timeSplit[0]) + 12; // it return  02+ 12 = 14 if time is 02:15: 23
    
    timeSplit.shift(); //removes first index  means hour from time
    timeSplit.unshift(hourUpdate.toString()); //adds changed time in first index
    return timeSplit.join(":");
    
    
 
} else if(dayNight ==="AM" && parseInt(timeSplit[0])===12){
    hourUpdate = "00"; //if its 12am ,then 12 will be 00
    timeSplit.shift();
    timeSplit.unshift(hourUpdate); 
    return timeSplit.join(":"); //returns ja ache tai using :
    
}

else{
    return timeSplit.join(":"); // if hr > 12 it applies
   
}

    }




