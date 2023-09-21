import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../utils/constants";
import { useMemo } from "react";
import "./Main.css";

const Main = ({ weatherTemp , onSelectCard }) => {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType
  })

  return (
    <main className="main">
      <WeatherCard day={true} weather={"sunny"} weatherTemp={weatherTemp} />
      <section className="card-wrapper">
        Today is {weatherTemp} F / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
