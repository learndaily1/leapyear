 

 document.querySelector(".result").append( document.createElement("h3"));
  
var year=prompt("Enter a year to check whether entered year is leap year or not?");


 
 
 
 if (year<=0){
document.querySelector(".result h3").textContent ="Wrong input" ;

 }
 
  else if (year % 400 === 0) {
     document.querySelector(".result h3").textContent = year +" is a leap year" ;
   }
  
   else if (year % 100 === 0) {
   document.querySelector(".result h3").textContent = year + " is not a leap year";
   }
   
   else if (year % 4 === 0) {
    document.querySelector(".result h3").textContent = year + " is a leap year";
   }
  
   else {
    document.querySelector(".result h3").textContent = year + " is not a leap year"; 
   }

  
