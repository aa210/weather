var loading = document.getElementById("loading");

async function getWeather(){
  var newCity = document.querySelector('input').value;
  const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+newCity+'?key=4TBC2PTWQ8RQXKNL3EM8JM2XG', {mode:'cors'});
  const weatherData = await response.json();
  

 let temperatureF = weatherData.days[0].temp; 
 
 document.getElementById("fahr").innerHTML = temperatureF + "° F";
  
 let temperatureC = Math.round((5/9)*(temperatureF -32)) ;
   document.getElementById("cels").innerHTML = temperatureC + "° C";
  
  
let locationName = weatherData.resolvedAddress;
  document.getElementById("location").innerHTML = locationName;
  
let timezone = weatherData.timezone;
document.getElementById("country").innerHTML = timezone;  
  
 let weatherDescription = weatherData.days[0].description;
  
 let weatherCondition = weatherData.days[0].conditions;
document.getElementById("condition").innerHTML =  weatherCondition;  
  
  
let iconData = weatherData.days[0].icon;
  
 switch(iconData) {
     case "clear-day":
    document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/0/07/Clear_Sky.jpg')";
     break;
     case "rain":
    document.body.style.backgroundImage = "url('https://4.bp.blogspot.com/_3f95iVVUx6I/TETTajgzEwI/AAAAAAAAPmA/d8RnwP5q5qM/s1600/rain-1.jpg')";
     break;
     case "partly-cloudy-day":
   document.body.style.backgroundImage = "url('https://seekraz.files.wordpress.com/2012/03/clouds-separating.jpg')";
     break;
} 
  
  // default
 celsButton.className="selected";
  document.getElementById("fahr").className="hidden";
  document.getElementById("temperature-options").classList.remove("hidden");
}



getWeather();

// Change temperature views 
var celsButton = document.getElementById("celsToggle");
  
  var fahrButton = document.getElementById("fahrToggle");
  


 function showFahr() {
celsButton.classList.remove("selected");
fahrButton.className="selected";
 document.getElementById("cels").classList="hidden";
document.getElementById("fahr").classList.remove("hidden");
}

 function showCels() {
celsButton.className="selected";
fahrButton.classList.remove("selected");
 document.getElementById("cels").classList.remove("hidden");
document.getElementById("fahr").classList="hidden";
}
