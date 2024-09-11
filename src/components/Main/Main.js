import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";
import { getWeatherType } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Main.css";

const Main = ({ weatherTemp, onSelectCard, clothingItems }) => {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weather = getWeatherType(weatherTemp);
  const filteredCards = clothingItems.filter((item) => {
    return item.weather && item.weather.toLowerCase() === weather;
  });

  if (isLoggedIn) {
    filteredCards.filter((item) => {
      return item.owner === currentUser._id;
    });
  }

  return (
    <main className="main">
      <WeatherCard day={true} weather={"cloudy"} weatherTemp={weatherTemp} />
      <section className="main__content">
        <h3 className="main__title">
          Today is {weatherTemp}°{currentTemperatureUnit} / You may want to
          wear:
        </h3>
        <ul className="main__card-wrapper">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
