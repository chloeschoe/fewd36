//Structure
//-----------------------------------------

var tempF = document.querySelector(".temp-f");
var tempC = document.querySelector(".temp-c");
var convert = document.querySelector (".convert");
var reset = document.querySelector(".reset");

//Events
//-----------------------------------------

tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

//Event handler Functions 
//-----------------------------------------


function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calcFahrenheitToCelcius(tempF.value)
  } else {
    tempC.value = '';
  }
}

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calcCelciusToFahrenheit(tempC.value)
  } else {
    tempF.value = '';
  }
}

  //Celsius to Fahrenheit;
  //comment: F = C * 9/5 +32;
  
  
 function calcCelciusToFahrenheit(tempC){
   var tempF = tempC * 9/5 + 32;
   return tempF;

}

  // convert Fahrenheit to Celsius; 
  //formula : C = (F -32) * (5/9);

 function calcFahrenheitToCelcius(tempF){
   var tempC = (tempF-32) * 5/9;
   return tempC;//

}