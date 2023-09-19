const weatherConditions = [
  {
    weather: "sunny",
    url: require("../images/day-weather/sunny.svg").default,
    day: true,
  },
  {
    weather: "cloudy",
    url: require("../images/day-weather/cloudy.svg").default,
    day: true,
  },
  {
    weather: "rain",
    url: require("../images/day-weather/rain.svg").default,
    day: true,
  },
  {
    weather: "storm",
    url: require("../images/day-weather/storm.svg").default,
    day: true,
  },
  {
    weather: "snow",
    url: require("../images/day-weather/snow.svg").default,
    day: true,
  },
  {
    weather: "fog",
    url: require("../images/day-weather/fog.svg").default,
    day: true,
  },
];

const WeatherCard = ({ day = true, weather = "sunny", weatherTemp = 0 }) => {
  const imageSrc = weatherConditions.filter((i) => {
    return i.day === day && i.weather === weather;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp} F</div>
      <img className="weather__image" src={imageSrcUrl} />
    </section>
  );
};

export default WeatherCard;
