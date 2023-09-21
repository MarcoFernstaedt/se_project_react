import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { getWeatherType } from "../../utils/weatherApi";
import "./Main.css";

const Main = ({ weatherTemp, onSelectCard }) => {
  const weatherType = getWeatherType(weatherTemp);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} weather={"sunny"} weatherTemp={weatherTemp} />
      <section className="card-wrapper">
        Today is {weatherTemp} F / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;