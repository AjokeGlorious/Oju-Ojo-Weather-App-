function getWeather(response) {
  let temperatureElement = document.querySelector("#temp")
  let temperature = response.data.temperature.current
let cityElement = document.querySelector("#city");
let humidityElement = document.querySelector("#humidity");
let descriptionElement = document.querySelector("#description");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);
  console.log(response.data.time);

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
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Ibadan");