import { apiKey, latitude, longitude } from "../utils/constants";

const getForecastWeather = () => {
  const weatherData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(processServerResponce);

  return weatherData;
};

const processServerResponce = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const parseWeatherData = (data) => {
  const main = data.main;
  const temp = main && main.temp;
  return Math.ceil(temp);
};

const getWeatherType = (weatherTemp) => {
  if (weatherTemp >= 86) {
    return "hot";
  } else if (weatherTemp >= 66 && weatherTemp <= 85) {
    return "warm";
  } else if (weatherTemp <= 65) {
    return "cold";
  }
};

export { getWeatherType, parseWeatherData, getForecastWeather };
