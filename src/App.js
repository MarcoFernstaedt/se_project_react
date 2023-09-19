import Header from "./Header/Header";
import WeatherCard from "./WeatherCard/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <WeatherCard day={true} weather={'sunny'} weatherTemp={'95'} />
      </main>
    </div>
  );
}

export default App;
