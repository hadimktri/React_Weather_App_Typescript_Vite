import { useEffect, useState } from "react";
import style from "./time-calendar.module.css";

export default function Calendar() {
  const [date, setDate] = useState<string>();

  let interval: number;

  const today = () => {
    setDate(
      new Intl.DateTimeFormat("en-us", {
        dateStyle: "full",
      }).format(new Date())
    );
  };

  useEffect(() => {
    today();
    return () => clearInterval(interval);
  });

  return <p className={style.date}>{date}</p>;
}
