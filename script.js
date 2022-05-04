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
  axios.get(apiUrl).then(changeTempDescripWindHumid);
}

function changeTempDescripWindHumid(response) {
  console.log(response);
  let displayTemp = document.querySelector("#temperature");
  displayTemp.innerHTML = Math.round(response.data.main.temp);
  //assign value to the global variable called celciusGlobal.
  celsiusGlobal = Math.round(response.data.main.temp);
  let selectDescription = document.querySelector("#description");
  selectDescription.innerHTML = response.data.weather[0].description;
  let selectWind = document.querySelector("#wind");
  selectWind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  let selectHumid = document.querySelector("#humidity");
  selectHumid.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let selectIcon = document.querySelector("#icon");
  selectIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  selectIcon.setAttribute("alt", response.data.weather[0].description);
}

//geting the current location
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(getLatAndLon);
}
function getLatAndLon(position) {
  console.log(position.coords.latitude);
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "168a6f3c90ccb5d34accdfb30077f21f";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = "Current City";
  axios.get(apiUrl).then(changeTempDescripWindHumid);
}

//Show Today's day of week and current time
function formatDate() {
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
}
//this function is called when click on the Fahrenheit link, the temperature will show in fahrenheit.
//function clickShowFahrenheitTemp(event) {
// event.preventDefault;
// let tempElement = document.querySelector("#temperature");
// tempElement.innerHTML = Math.round((celsiusGlobal * 9) / 5 + 32) + "℉";
//}
//this function is called when click on the Celcius link.
//function clickShowCelsiusTemp(event) {
// event.preventDefault;
// let tempElement = document.querySelector("#temperature");
// tempElement.innerHTML = celsiusGlobal + "℃";
//}
//This is for after entering the city, and hit Search.
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);
//this is for the "Current" button.
let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", getCurrentLocation);
//this calls the function that converts  Celcius to Fahrenheit.
//let selectFahrenheit = document.querySelector("#fahrenheit-link");
//selectFahrenheit.addEventListener("click", clickShowFahrenheitTemp);
//this calls the function that shows Celcius.
//let selectCelcius = document.querySelector("#celsius-link");
//selectCelcius.addEventListener("click", clickShowCelsiusTemp);
//creating a global variable for celcius.
let celsiusGlobal = null;
//this calls the function and show Date info.
formatDate();
