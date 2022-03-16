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
//change city to whatever you entered
function changeCity(event) {
  event.preventDefault();
  let cityText = document.querySelector("#city");
  let enteredCity = document.querySelector("#city-input");
  cityText.innerHTML = enteredCity.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);
//change temperature when clicking on C or F.
function changeTempC() {
  let temp = document.querySelector("#temperature");
  temp.innerHTML = "66";
}
function changeTempF() {
  let temp = document.querySelector("#temperature");
  temp.innerHTML = "19";
}
let c = document.querySelector("#celsius-link");
c.addEventListener("click", changeTempC);

let f = document.querySelector("#fahrenheit-link");
f.addEventListener("click", changeTempF);
