import { useEffect, useState } from "react";
import style from "./time-calendar.module.css";

export default function Calendar() {
  const [time, setTime] = useState<string>("--:--:--");

  let interval: number;

  const clock = () => {
    interval = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat("en-us", {
          timeStyle: "long",
        }).format(new Date())
      );
    }, 1000);
  };

  useEffect(() => {
    clock();
    return () => clearInterval(interval);
  });

  return (
    <div>
      <p className={style.time}>{time}</p>
    </div>
  );
}
