import axios from "axios";

export const getCity = (city: string) => {
  const url = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${city}`,
    params: {
      minPopulation: "1000000",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIAPI_KEY,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  return axios.request(url);
};

export const getWeather = (lat: string, lon: string) => {
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  return axios.get(url);
};

export const getForcast = (lat: string, lon: string) => {
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  return axios.get(url);
};
