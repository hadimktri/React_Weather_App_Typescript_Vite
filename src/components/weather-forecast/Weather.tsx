import style from "./style.module.css";

const Weather = ({ weather }: any) => {
  console.log(weather);
  return (
    <div className={style.weather}>
      <div className={style.top}>
        <p className={style.temperature}>
          {Math.round(weather.data.main.temp)}°C
        </p>
        <img
          src={`../src/assets/icons/${weather.data.weather[0].icon}.png`}
          alt=""
        />
      </div>
      <div className={style.bottom}>
        <div>
          <p className={style.city}>{weather.city}</p>
          <p className={style.whetherDescription}>
            {weather.data.weather[0].description}
          </p>
        </div>
        <div className={style.details}>
          <div className={style.parameterRow}>
            <span className={style.parameterLabel}>feels like: </span>
            <span className={style.parameterValue}>
              {Math.round(weather.data.main.feels_like)}°C
            </span>
          </div>
          <div className={style.parameterRow}>
            <span className={style.parameterLabel}>wind: </span>
            <span className={style.parameterValue}>
              {weather.data.wind.speed}
            </span>
          </div>
          <div className={style.parameterRow}>
            <span className={style.parameterLabel}>humidity: </span>
            <span className={style.parameterValue}>
              {weather.data.main.humidity}
            </span>
          </div>
          <div className={style.parameterRow}>
            <span className={style.parameterLabel}>presssure: </span>
            <span className={style.parameterValue}>
              {weather.data.main.pressure}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
