import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../utils/utils";
import CardItem from "../CardItem/CardItem";
import "./Main.css";

const Main = ({ weatherTemp }) => {
  return (
    <main className="main">
      <WeatherCard day={true} weather={"sunny"} weatherTemp={weatherTemp} />
      <section className="card-wrapper">
        Today is {weatherTemp} F / You may want to wear:
        <div className="card__items">
          {defaultClothingItems.map((item) => (
            <CardItem item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
