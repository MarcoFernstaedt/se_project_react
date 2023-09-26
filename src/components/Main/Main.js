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
      <WeatherCard day={true} weather={"cloudy"} weatherTemp={weatherTemp} />
      <section className="main__content">
        <h3 className="main__title" >Today is {weatherTemp}°F / You may want to wear:</h3>
        <ul className="main__card-wrapper">
          {filteredCards.map((item) => {
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
