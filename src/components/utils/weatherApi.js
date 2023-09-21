const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}";
const apiKey = "7fdcb46da96fb444e3ed010cf264fd9e";

const latitude = 44.34;
const longitude = 10.99;

export const getForecastWeather = () => {
  const weatherData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return weatherData;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temp = main && main.temp;
  return Math.ceil(temp);
};

