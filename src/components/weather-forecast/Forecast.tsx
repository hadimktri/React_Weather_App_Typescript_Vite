import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
import style from "./style.module.css";

const Forecast = ({ foreCast }: any) => {
  const dayOfWeek = new Date().getDay();
  const forecastDay = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfWeek)
  );

  return (
    <>
      <label className={style.title}></label>
      <Accordion allowZeroExpanded className={style.accardion}>
        {foreCast.data.list.splice(0, 7).map((item: any, index: number) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={style.dailyItem}>
                  <img
                    src={`../src/assets/icons/${item.weather[0].icon}.png`}
                    alt=""
                    className={style.iconSmall}
                  />
                  <label className={style.day}>{forecastDay[index]}</label>
                  <label className={style.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={style.minMax}>
                    min:{Math.round(item.main.temp_min)}
                    <small>°C</small>
                  </label>
                  <label className={style.minMax}>
                    max:{Math.round(item.main.temp_max) + 4}
                    <small>°C</small>
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={style.dailyDetailGrid}>
                <div className={style.dailyDetailGridItem}>
                  <label>Pressure: </label>
                  <label>{item.main.pressure}hpa</label>
                </div>
                <div className={style.dailyDetailGridItem}>
                  <label>Humidity: </label>
                  <label>{item.main.humitity}%</label>
                </div>
                <div className={style.dailyDetailGridItem}>
                  <label>Clouds: </label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={style.dailyDetailGridItem}>
                  <label>Wind Speed: </label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className={style.dailyDetailGridItem}>
                  <label>Sea Level: </label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className={style.dailyDetailGridItem}>
                  <label>feels Like: </label>
                  <label>
                    {Math.round(item.main.feels_like)}
                    <small>°C</small>
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
