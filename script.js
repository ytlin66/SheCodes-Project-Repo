//Show Today's day of week and current time
let today = new Date();
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = daysOfWeek[today.getDay()];
let time = today.getHours() + ":" + today.getMinutes();
let todayDate = document.querySelector("#date");
todayDate.innerHTML = `${day} ${time}`;
//below is to change city to whatever you entered
function changeCity(event) {
  event.preventDefault();
  let cityText = document.querySelector("#city");
  let enteredCity = document.querySelector("#city-input");
  cityText.innerHTML = enteredCity.value;
  //below is to get weather API and URL.
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "168a6f3c90ccb5d34accdfb30077f21f";
  let city = enteredCity.value;
  let units = "metric";
  let apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(changeTemp);
  axios.get(apiUrl).then(changeDescription);
  axios.get(apiUrl).then(changeWind);
  axios.get(apiUrl).then(changeHumidity);
}

function changeTemp(response) {
  console.log(response);
  let newTemperature = response.data.main.temp;
  let displayTemp = document.querySelector("#temperature");
  displayTemp.innerHTML = newTemperature;
}
function changeDescription(response) {
  let description = response.data.weather[0].description;
  let selectDescription = document.querySelector("#description");
  selectDescription.innerHTML = description;
}
function changeWind(response) {
  let newWind = response.data.wind.speed;
  let selectWind = document.querySelector("#wind");
  selectWind.innerHTML = `Wind: ${newWind} km/h`;
}
function changeHumidity(response) {
  let newHumid = response.data.main.humidity;
  let selectHumid = document.querySelector("#humidity");
  selectHumid.innerHTML = `Humidity: ${newHumid}%`;
}

function getLatAndLon(position) {
  console.log(position.coords.latitude);
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "168a6f3c90ccb5d34accdfb30077f21f";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(changeTemp);
  axios.get(apiUrl).then(changeDescription);
  axios.get(apiUrl).then(changeWind);
  axios.get(apiUrl).then(changeHumidity);
}
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(getLatAndLon);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);
let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", getCurrentLocation);
