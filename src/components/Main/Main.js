import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";
import { getWeatherType } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./Main.css";

const Main = ({ weatherTemp, onSelectCard, onCardLike, clothingItems }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weather = getWeatherType({ weatherTemp, currentTemperatureUnit });
  const filteredCards = clothingItems.filter((item) => {
    return item.weather && item.weather.toLowerCase() === weather;
  });

  return (
    <main className="main">
      <WeatherCard day={true} weather={"cloudy"} weatherTemp={weatherTemp} />
      <section className="main__content">
        <h3 className="main__title">
          Today is {weatherTemp}°{currentTemperatureUnit} / You may want to
          wear:
        </h3>
        <ul className="main__card-wrapper">
          {filteredCards.reverse().map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                onCardLike={onCardLike}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
