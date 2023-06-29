import "./App.css";
import SelectCity from "./components/select-city/SelectCity";
import Calendar_Time from "./components/time-calendar/Calendar-Time";
import { getWeather, getForcast } from "./api/axios";
import { useState, useEffect } from "react";
import Weather from "./components/weather-forecast/Weather";
import Forecast from "./components/weather-forecast/Forecast";
import { ICity } from "../interface";

const App = () => {
  const [weather, setWeather] = useState<any>();
  const [foreCast, setForeCast] = useState<any>();

  const handleSelectedCity = (searchData: ICity) => {
    const [lat, long] = searchData.value.split(" ");

    Promise.all([getWeather(lat, long), getForcast(lat, long)])
      .then((res) => {
        setWeather({ city: searchData.label, ...res[0] });
        setForeCast({ city: searchData.label, ...res[1] });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleSelectedCity({
      label: "Metro Vancouver Regional District, CA",
      value: "49.2494 -122.98",
    });
  }, []);

  return (
    <div>
      <SelectCity handleSelectedCity={handleSelectedCity} />
      <div className="weather-clock">
        {weather && <Weather weather={weather} />}
        <Calendar_Time />
      </div>
      {foreCast && <Forecast foreCast={foreCast} />}
    </div>
  );
};
export default App;
