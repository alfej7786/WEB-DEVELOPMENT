function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        if (yaer % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
            console.log("Leap Year");
        }  else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
            console.log("Not Leap Year");
        }  else if (year % 4 === 0 && year % 100 !== 0) {
            console.log("Leap Year");
        }   else {
            console.log("Not Leap Year");
        }
    
    /**************Don't change the code below****************/    
    
    }