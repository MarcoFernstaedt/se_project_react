import { apiKey, latitude, longitude } from "../utils/constants";

export const getForecastWeather = () => {
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

export const parseWeatherData = (data) => {
  const main = data.main;
  const temp = main && main.temp;
  return Math.ceil(temp);
};
