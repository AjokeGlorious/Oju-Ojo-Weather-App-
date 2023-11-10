function getWeather(response) {
  let temperatureElement = document.querySelector("#temp")
  let temperature = response.data.temperature.current

let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature) 
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