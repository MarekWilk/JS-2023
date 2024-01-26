
let inputCity = document.querySelector(".city-​​search");
let arrWeatherLayout = [];
let weatherLayoutCount = 0;

const btnAdd = document.querySelector(".btn-add");
const btnDelete = document.querySelector(".btn-delete");

btnAdd.addEventListener("click", btnAddWeather);
btnDelete.addEventListener("click", btnDeleteWeather);


getDataFromStorage();

displayWeatherLayouts();

function btnAddWeather() {
  if (weatherLayoutCount < 10) {
    createWeatherLayout();
    weatherLayoutCount++;
  } else {
    alert("Overcrowded");
  }
}

function btnDeleteWeather() {
  alert("You need refresh web-site");
  localStorage.clear();
}

async function fetchWeatherApi() {
  let weatherData = {};

  try {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        inputCity.value +
        "&units=metric&appid=7f79f3f62c2158a047cee66e08953253"
    )
      .then((response) => response.json())
      .then((data) => {
        weatherData.city = data["name"];
        weatherData.temp = Math.round(data["main"]["temp"]);
        weatherData.icon = data["weather"][0]["icon"];
        weatherData.description = data["weather"][0]["description"];
        arrWeatherLayout.push(weatherData);
        localStorage.setItem("weatherApi", JSON.stringify(arrWeatherLayout));
      })
      .then(() => createDisplayWeatherLayout(weatherData));

  } catch (error) {
    console.error(`Fetching data failed: ${error}`);
  }
}

function getDataFromStorage() {
  arrWeatherLayout = [];

  if (localStorage.getItem("weatherApi") == null) return;

  const data = JSON.parse(localStorage.getItem("weatherApi"));

  if (data.length == 0) return;

  for (let i = 0; i < data.length; i++) {
    arrWeatherLayout.push(data[i]);
  }
}

function displayWeatherLayouts() {
  for (let i = 0; i < arrWeatherLayout.length; i++) {
    createDisplayWeatherLayout(arrWeatherLayout[i]);
  }
}

function createDisplayWeatherLayout(weatherData) {
  let dateTime = new Date();

  const mainBlock = document.querySelector(".main-block");

  const containerSomeWeatherLayout = document.createElement("div");
  containerSomeWeatherLayout.classList.add("container-some-weather-layout");

  const city = document.createElement("div");
  city.classList.add("city");
  city.innerHTML = weatherData.city;
  containerSomeWeatherLayout.appendChild(city);

  const iconWeather = document.createElement("div");
  iconWeather.classList.add("icon-weather");
  iconWeather.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.icon}@2x.png"/>`;
  containerSomeWeatherLayout.appendChild(iconWeather);

  const temp = document.createElement("div");
  temp.classList.add("temp");
  temp.innerHTML = weatherData.temp + "°";
  containerSomeWeatherLayout.appendChild(temp);

  const time = document.createElement("div");
  time.classList.add("time");
  time.innerHTML = dateTime.toLocaleString("pl-PL", {
    hour: "numeric",
    minute: "numeric",
  });
  containerSomeWeatherLayout.appendChild(time);

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = weatherData.description;
  containerSomeWeatherLayout.appendChild(description);

  mainBlock.appendChild(containerSomeWeatherLayout);
}

function createWeatherLayout() {
  fetchWeatherApi();
}