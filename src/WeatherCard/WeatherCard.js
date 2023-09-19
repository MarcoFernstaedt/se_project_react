import { weatherConditions } from "../utils/utils";
import './WeatherCard.css';

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
