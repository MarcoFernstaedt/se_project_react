import { weatherConditions } from "../../utils/constants";
import { findWeatherOption } from "../../utils/weatherApi";
import './WeatherCard.css';

const WeatherCard = ({ day , weather, weatherTemp }) => {
  const weatherOption = weatherConditions.filter((option) => findWeatherOption(option, day, weather));
  
  const imageSrcUrl = weatherOption[0].url || "";

  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img className="weather__image" src={imageSrcUrl} />
    </section>
  );
};

export default WeatherCard;
