function getWeather(response) {
  let temperatureElement = document.querySelector("#temp")
  let temperature = response.data.temperature.current
let cityElement = document.querySelector("#city");
let humidityElement = document.querySelector("#humidity");
let descriptionElement = document.querySelector("#description");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);
let iconElemeent = document.querySelector("#icons") 

  console.log(response.data.time);
iconElemeent.innerHTML = `<img src= ${response.data.condition.icon_url} alt="weather icons" class="weather-app-icon">
`
timeElement.innerHTML = formatDate(date);
cityElement.innerHTML = response.data.city;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
temperatureElement.innerHTML = Math.round(temperature) 
descriptionElement.innerHTML = response.data.condition.description
}

function formatDate(date) {
 
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
}



function searchCity(city) {
  let apiKey = "4175dd44d23bf5fo300715703fa0tf94"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  console.log(apiUrl);
  axios.get(apiUrl).then(getWeather)
}



function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
 
searchCity(searchInput.value);
}function displayForecast() {

  let days = ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tue"];
  let forecastHtml = "";

  days.forEach(function(day) {
    forecastHtml = forecastHtml +
      `<div class="weather-forecast-day">
         ${day}
       </div>
       
       <div>
         <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
             alt="weather icons"
             width="42px">
       </div>
       <div>
         <div class="weather-forecast-temp">
           <span class="weather-forecast-temp-high"><str>18°</str></span>
           <span class="weather-forecast-temp-low">12°</span>
         </div>
       </div>
      `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Ibadan");
displayForecast();



