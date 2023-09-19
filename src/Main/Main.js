import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../utils/utils";
import CardItem from "../CardItem/CardItem";
import './Main.css';

const Main = () => {
    return <main className="main">
        <WeatherCard day={true} weather={"sunny"} weatherTemp={"95"} />
        <section className="card-wrapper">
          Today is 95 F / You may want to wear:
          <div className="card__items">
            {defaultClothingItems.map((item) => (
              <CardItem item={item} />
            ))}
          </div>
        </section>
      </main>
}

export default Main;